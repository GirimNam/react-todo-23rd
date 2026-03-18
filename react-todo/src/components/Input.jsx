import { useState } from 'react'

function Input({ todos, setTodos }) {
  const [input, setInput] = useState('')

  const clickSubmit = (e) => {
    e.preventDefault()

    if (input.trim() === '') {
      alert('내용을 입력해주세요.')
      return
    }

    setTodos([...todos, { text: input, done: false }])
    setInput('')
  }

  return (
    <section className="inputlist">
      <form onSubmit={clickSubmit}>
        <input value={input} onChange={onChange} placeholder="TO DO 추가" />
        <button type="submit">추가</button>
      </form>

      <div>
        남은 TO DO 개수:{' '}
        <span>{todos.filter((todo) => !todo.done).length}</span>개
      </div>
    </section>
  )
}
export default Input
