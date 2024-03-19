import React from 'react'
import { useNavigate, Link  } from 'react-router-dom';
import axios from "axios"

export default function NoteCard(props) {
    const { _id, title, note, createdAt } = props.note
    const id = _id.toString()
    let navigate = useNavigate();

    const deleteNote = () => {
        axios.delete(`http://localhost:5000/api/notes/deleteNote/${id}`).then(() => {
        navigate('/allNotes', { replace: true });
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    return (
        <>
            <div class="w-full p-4 text-center bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-left">{title}</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 text-left overflow-ellipsis">{note}</p>
                <div class="items-center justify-end space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <p class="mb-5 text-base text-gray-300 sm:text-lg dark:text-gray-400 text-left overflow-ellipsis">{createdAt}</p>
                </div>
                <div class="items-center justify-end space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <div class="mt-10 flex items-center gap-x-6 mr-8">
                        <a
                            href="#"
                            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-right text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        ><Link to={{ pathname: `/updateNote/${id}`}} >
                            Edit
                         </Link>   
                        </a>
                        <a
                            href="#"
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
