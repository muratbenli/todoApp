import React from "react";

const Content = ({todo, onDestroy, onChange}) => {
    return(
        <>
            <div className="bg-gray-100 hover:bg-gray-200 px-8 py-6 flex items-center border-b border-gray-300">
                <input property="done"
                       className="cursor-pointer w-6 h-6 rounded"
                       type="checkbox"
                       checked={todo.completed}
                       onChange={() => onChange(todo.id)} />
                <div className="flex ml-4">
                    <img alt={todo.text} src={todo.completed ?
                        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/done-stamp-design-template-f2292c30e3cb5d1a3205b6b34622f023_screen.jpg?ts=1590770841"
                        : "https://i.imgur.com/OvMZBs9.jpg"
                    } className="w-10 h-10 object-cover rounded object-top" />
                    <div className="flex flex-col pl-4">
                        <h2 className="font-medium text-indigo-500 text-sm">{todo.completed ? "Done" : "Active"}</h2>
                        <h3 className="text-gray-700 text-sm">{todo.text}</h3>
                    </div>
                </div>
                <button onClick={() => onDestroy(todo.id)} className="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">

                    <svg viewBox="0 0 16 16" className="w-8 h-8 mr-2" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fillRule="evenodd"
                              d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                    Delete
                </button>
            </div>
        </>
    )
}

export default Content;