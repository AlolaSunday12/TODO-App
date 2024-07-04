import { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {
  const [todolist, setTodolist] = useState(localStorage.getItem("todos")? 
  JSON.parse(localStorage.getItem("todos")) : [])
  const inputRef = useRef(null);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false
    }
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodolist((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  const toggle = (id) => {
    setTodolist((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist))
  }, [todolist]);
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col 
    p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do-List</h1>
      </div>
      <div className="bg-gray-200 flex items-center rounded-full my-7">
        <input ref={inputRef} className="bg-transparent border-0 outline-none 
        flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" 
        type="text" placeholder="Add your task" />
        <button onClick={add} className="border-none bg-orange-600 rounded-full w-32 h-14
         text-white text-lg font-medium cursor-pointer">ADD +</button>
      </div>
      <div>
        {todolist.map((item, index) => {
          return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} 
          deleteTodo={deleteTodo} toggle={toggle}/>
        })}
        
      </div>
    </div>
  )
}

export default Todo;