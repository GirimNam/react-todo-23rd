import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Input from './components/input'
import List from './components/List'

function App() {
  const [todos, setTodos] = useState([])

  /* 투두리스트 저장 및 불러오기 설정, useEffect 이용 */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('myTodoList')) || []
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('myTodoList', JSON.stringify(todos))
  }, [todos])

  return (
    <div id="app">
      <div className="min-h-screen flex justify-center">
        <Header />
        <Input todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
