import React, { useState, useEffect } from 'react'
import NoteCard from '../Components/NoteCard'

export default function AllNotes() {
    const [notes, setNotes] = useState([])

    //Retrieve all the resources
    const retrieveNotes = () => {
        fetch("http://localhost:5000/api/note/getAllNotes",{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        }).then(()=>{
            console.log("Retrieved Notes Successfully")
            setNotes(response.json())
        })

    useEffect(() => {
        retrieveNotes()
    }, [])

    return (
        <>
            <div class="flex flex-col mt-10">
                <div className="mt-10 flex items-center justify-end gap-x-6 mr-8">
                    <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-right text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create New Note
                    </a>
                </div>
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <NoteCard />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
}
