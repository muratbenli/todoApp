import React, {useContext} from "react";

import TodoContext from "../context/TodoContext";
import {Formik} from "formik";
import {v4 as uuidv4} from "uuid";

const TodoHeader = ({onChange}) => {
    const {todos, setTodos , activeFilter, setActiveFilter} = useContext(TodoContext);

    const todoLeft = todos.filter((todo) => !todo.completed);

    const onSubmit = (values, bag) => {
        const data = {
            ...values,
            completed: false,
            id: uuidv4(),
        };

        setTodos([data, ...todos]);

        bag.setSubmitting(false);
        bag.resetForm();
    };
    return (
        <div className="p-8 shadow-md relative bg-white">
            <div className="flex items-center justify-center">
                <div className="text-indigo-600 font-medium text-2xl ml-3">Todo App</div>
            </div>

            <div className="mt-6 flex">
                <h1 className="font-medium text-lg my-2">Add a new task to the list</h1>

                <div className="relative ml-auto flex-1 pl-8 sm:block hidden">
                    <Formik
                        initialValues={{
                            text: "",
                        }}
                        onSubmit={onSubmit}
                    >
                        {({
                              values,
                              handleChange,
                              handleSubmit,
                              errors,
                              touched,
                              setFieldTouched,
                              isValid,
                              isSubmitting,
                              setFieldValue,
                          }) => (
                            <form className="h-10" onSubmit={handleSubmit}>
                                <input placeholder="Add new task"
                                       onChange={handleChange("text")}
                                       name="text"
                                       value={values.text}
                                       onBlur={() => setFieldTouched("text")}
                                       className="w-full border rounded border-gray-400 h-full focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"/>

                            </form>
                        )}
                    </Formik>


                    <svg className="w-4 h-4 absolute text-indigo-700 right-0 top-0 mt-3 mr-2 text-gray-500" viewBox="0 0 16 16"
                         fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                        <path fillRule="evenodd"
                              d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                        <path fillRule="evenodd"
                              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    </svg>
                </div>
            </div>
            <div className="mt-6 flex flex justify-center">
                <button onClick={() => setActiveFilter('all')}
                        className={activeFilter === "all" ? "ml-4 bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none"
                            : "ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400"}>
                    All ({todos.length})
                </button>
                <button onClick={() => setActiveFilter('active')}
                        className={activeFilter === "active" ? " ml-4 bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none"
                            : "ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400"}>
                    Active ({todoLeft.length})
                </button>
                <button onClick={() => setActiveFilter('done')}
                        className={activeFilter === "done" ? "ml-4 bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none"
                            : "ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400"}>
                    Done ({todos.length-todoLeft.length})
                </button>
            </div>
        </div>
    )
}

export default TodoHeader;