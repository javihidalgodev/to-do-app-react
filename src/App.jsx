import './App.css'
import Footer from './components/Footer'
import Logo from './components/Logo'
import ToDoList from './components/ToDoList'

function App() {
  

  return (
    <div className='todo-app'>
      <Logo />
      <div className="todo-container">
        <h1>TO-DO LIST</h1>
        <ToDoList />
      </div>
      <Footer />
    </div>
  )
}

export default App
