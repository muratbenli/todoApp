import React, {useContext} from "react";
import Content from "./Content";
import TodoHeader from "./TodoHeader";
import TodoContext from "../context/TodoContext";

let filtered = "test"
const TodoForm = () => {
    const { todos, setTodos, activeFilter } = useContext(TodoContext);

    const onDestroy = (id) =>
        setTodos(todos.filter((todo) => todo.id !== id && todo));

    const onChange = (id) => {
        const updatedData = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedData);
    };

    filtered = todos;

    if (activeFilter !== "all") {
        filtered = todos.filter((todo) =>
            activeFilter === "active"
                ? todo.completed === false && todo
                : todo.completed === true && todo
        );
    }
    return (
        <>
            <div>
                <div className="h-screen w-screen bg-indigo-400 overflow-hidden absolute flex items-center">
                    <div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
                    <div className="w-64 h-64 -mx-32 bg-indigo-300 opacity-50 rounded-full" />
                    <div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-indigo-300 rounded-full" />
                    <div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
                </div>
                <div className="container mx-auto h-screen py-16 px-8 relative">
                    <div className="flex w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl">
                        <div className="w-full bg-white text-gray-800 flex flex-col">
                            <TodoHeader onChange={onChange} />
                            <div className="overflow-auto flex-grow">
                                {
                                    filtered.map((todo,index) =>
                                        <Content todo={todo} key={index}  onChange={onChange} onDestroy={onDestroy}/>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TodoForm;