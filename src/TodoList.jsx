import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleKeyPress (event){
        if (event.key === 'Enter'){
            addTask();
        }

    } 

    function addTask() {

        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index) {
        
        const updatedTask = tasks.filter((element, i) => i !== index)

        setTasks(updatedTask); 

    }

    function editTask(index) {

        const updatedTask = prompt("Edit task:", tasks[index]);
        if (updatedTask !== null && updatedTask.trim() !== "") {
            const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='todo-list'>
            <h1>Todo List</h1>
            <div>
                <input 
                    type='text' 
                    placeholder='Insira uma tarefa...'
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress} 
                />
                <button
                    className='add-button' 
                    onClick={addTask}>
                Add Task
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button 
                            className='delete-button'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                            className='edit-button'
                             onClick={() => editTask(index)}>
                            Edit</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;