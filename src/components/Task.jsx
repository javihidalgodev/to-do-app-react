import '../styles/Task.css'
import { TiDelete } from 'react-icons/ti';

export default function Task ({ id, text, finished, finishTask, deleteTask }) {
  
  return (
    <div className={`task-container ${finished ? 'finished' : ''}`.trimEnd()}>
      <div className='task-text' onClick={() => {finishTask(id)}}>{ text }</div>
      <div onClick={() => {deleteTask(id)}}><TiDelete className='task-icon' /></div>
    </div>
  )
}