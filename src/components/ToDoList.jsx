import { useState } from "react"
import '../styles/ToDoList.css'
import TaskForm from "./TaskForm"
import Task from "./Task"

export default function ToDoList () {
  const initData = JSON.parse(localStorage.getItem('todos'))
  const [todos, setTodos] = useState(initData ? initData : [])

  const addTask = task => {
    setTodos([task, ...todos])
    localStorage.setItem('todos', JSON.stringify([task, ...todos]))
  }

  const deleteTask = id => {
    const newList = todos.filter(todo => todo.id !== id)
  
    setTodos(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  const finishTask = id => {
    const updatedList = todos.map(todo => {
      if(todo.id === id) {
        todo.finished = !todo.finished
      }

      return todo
    })
    setTodos(updatedList)
    localStorage.setItem('todos', JSON.stringify(updatedList))
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="todo-list-container">
        {
          todos.length > 0
            ? todos.map(todo => 
              <Task
                key={todo.id}
                id={todo.id}
                text={todo.text}
                finished={todo.finished}
                deleteTask={deleteTask}
                finishTask={finishTask} />)
            : <div className="no-tasks">No tasks</div>
        }
      </div>
    </>
  )
}