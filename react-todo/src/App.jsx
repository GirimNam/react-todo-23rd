import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Input from './components/input'

function App() {
  const [todos, setTodos] = useState([])



  return (
    <>
    <div className='min-h-screen flex justify-center'>
      <Header />
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />

    </div>
      
    </>
  )
}

export default App
