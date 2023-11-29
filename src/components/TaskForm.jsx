import '../styles/TaskForm.css';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function TaskForm (props) {
  const [text, setText] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newTask = {
      id: uuidv4() ,
      text: text,
      finished: false

    }
    setText('')
    props.onSubmit(newTask)
  }

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        className='task-input'
        type='text'
        placeholder='New task...'
        name='task-text'
        onChange={handleChange}
        value={text} />

      <button className='task-button'>Add</button>
    </form>
  )
}