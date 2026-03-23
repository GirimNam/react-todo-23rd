import { useEffect, useState } from 'react'
import { Temporal } from '@js-temporal/polyfill'
import Header from '@components/Header'
import Input from '@components/Input'
import List from '@components/List'

function App() {
  const [todos, setTodos] = useState([])
  const [date, setDate] = useState(Temporal.Now.plainDateISO('Asia/Seoul'))
  const getKey = (date) => `myTodoList-${date.toString()}`

  /* 투두리스트 저장 및 불러오기 설정, useEffect 이용 */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(getKey(date))) || []
    setTodos(saved)
  }, [date])

  useEffect(() => {
    localStorage.setItem(getKey(date), JSON.stringify(todos))
  }, [todos, date])

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header
        date={date}
        setDate={setDate}
      />
      <Input
        todos={todos}
        setTodos={setTodos}
      />
      <List
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App
