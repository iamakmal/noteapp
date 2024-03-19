import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios"
import NoteCard from '../Components/NoteCard';

export default function AllNotes() {
    const [notes, setNotes] = useState([])
    const [Keyword, setKeyword] = useState('')

    //Retrieve all the Notes
    const retrieveNotes = () => {
        axios.get("http://localhost:5000/api/notes/getNotes").then((res) => {
            console.log(res.data)
            setNotes(res.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    useEffect(() => {
        retrieveNotes()
    }, [])

    const filteredNotes = notes.filter((data) => {
        const title = data.title?.toLowerCase() || ''; 
        const filterNote = data.note?.toLowerCase() || '';
        const keyword = Keyword.toLowerCase();
    
        return title.includes(keyword) || filterNote.includes(keyword);
    });

    const renderNotes = filteredNotes.map((note) => {
        return (
            <NoteCard notes={note} />
        )
    })

    return (
        <>
            <div class="flex flex-col mt-10">
                <div className="mt-10 flex items-center justify-end gap-x-6 mr-8">
                    <Link
                        to="/createNote"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-right text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create New Note
                    </Link>
                </div>
                <div className="flex items-center justify-center max-w-4xl ml-80 mb-10">
                    <input type="text" name="searchNote" id="searchNote" value={Keyword} onChange={(e) => setKeyword(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Search Keyword" required />
                </div>
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            {renderNotes}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

