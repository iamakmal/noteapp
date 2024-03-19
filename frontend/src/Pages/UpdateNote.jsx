import React,{useState, useEffect} from 'react'
import { useNavigate, Link, useParams  } from 'react-router-dom';
import axios from "axios"

export default function UpdateNote() {
const [title, setTitle] = useState("")
const [note, setNote] = useState("")
let navigate = useNavigate();
const {id} = useParams()

useEffect(() => {
    axios.get(`http://localhost:5000/api/notes/getNote/${id}`).then((res) =>{
        console.log(res.data)
        setTitle(res.data.title)
        setNote(res.data.note)
    })
    .catch((error) => {
        console.log(error.response.data)
    })
},[])

const updateNote = (e) => {
    e.preventDefault()
    const data = {
        title,
        note
    }
    axios.put("http://localhost:5000/api/notes/updateNote/${id}", data).then(() => {

        navigate('/allNotes', { replace: true });
    })
        .catch((error) => {
            console.log(error.response.data)
        })
}

return (
    <>
        <div class="flex items-center justify-center h-screen">
        <div class="w-full max-w-4xl p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" onSubmit={updateNote}>
                <h5 class="text-2xl font-medium text-gray-900 dark:text-white">Create New Note</h5>
                    <div>
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Title" required />
                    </div>
                    <div class="col-span-2">
                        <label for="note" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                        <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the Note" required></textarea>
                    </div>
                    <div className="flex items-center justify-end">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-10">Create Note</button>
                    <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"><Link to="/allNotes">Cancel</Link></button>
                    </div>
            </form>
            </div>
            </div>
    </>
        )
    }
    