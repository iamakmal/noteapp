import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

export default function NoteCard(props) {
    const { _id, title, body, updatedAt } = props.notes
    const newDate = new Date(updatedAt)
    const date = newDate.toLocaleDateString() + " at " + newDate.toLocaleTimeString()
    const id = _id.toString()

    //This will delete a note by calling the endpoint in the backend
    const deleteNote = () => {
        axios.delete(`${process.env.REACT_APP_API}/deleteNote/${id}`).then(() => {
        //After deleting it will reload the page
        window.location.reload()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    return (
        <>
            <div class="w-full mb-20 p-4 text-center bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-left">{title}</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 text-left overflow-ellipsis">{body}</p>
                <div class="flex justify-between items-center">
                <p class="mt-10 text-base text-gray-500 sm:text-lg dark:text-gray-400 text-left">{date.toString()}</p>
                    <div class="mt-10 flex items-center gap-x-6 mr-5">
                        <a
                            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-right text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        ><Link to={{ pathname: `/updateNote/${id}`}} >
                            Edit
                         </Link>   
                        </a>
                        <a
                            onClick={deleteNote}
                            class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-right text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Delete
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
