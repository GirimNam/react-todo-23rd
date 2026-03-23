import { useState } from 'react'

function Input({ todos, setTodos }) {
  /* 추가 버튼 함수*/
  const [input, setInput] = useState('')

  const clickSubmit = (e) => {
    e.preventDefault()

    if (input.trim() === '') {
      alert('내용을 입력해주세요.')
      return
    }

    setTodos((prev) => [...prev, { text: input, done: false }])
    setInput('')
  }

  return (
    /* 입력창 및 추가버튼, 투두 개수 */
    <section className="w-full flex flex-col items-center gap-5">
      <form
        onSubmit={clickSubmit}
        className="flex w-full max-w-[500px] gap-2.5"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요."
          className="flex-1 p-4 rounded border border-black bg-white"
        />
        <button
          type="submit"
          className="w-20 p-4 bg-green-900 text-white rounded"
        >
          추가
        </button>
      </form>

      <div>
        남은 TO DO 개수:{' '}
        <span>{todos.filter((todo) => !todo.done).length}</span>개
      </div>
    </section>
  )
}
export default Input
