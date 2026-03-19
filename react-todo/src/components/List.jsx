function List({ todos, setTodos }) {
  /* 삭제 버튼 함수 */
  const deleteButton = (index) => {
    setTodos(todos.filter((_, i) => i !== index)) //삭제할 인덱스 i만 빼고 남겨라, _는 배열 안의 값(안씀)
  }

  /* 체크박스 함수 */
  const checkBox = (index) => {
    const newTodos = [...todos] //기존 배열을 직접 수정하는게 아니라 복사 후 수정
    newTodos[index].done = !newTodos[index].done //done은 todo에 들어가는 객체의 속성
    setTodos(newTodos)
  }

  return (
    /* 투두 추가 시 출력 화면 */
    <section>
      <ul className="w-full max-w-[500px] flex flex-col gap-4 mt-5">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="flex items-center justify-center gap-2.5 text-lg">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => checkBox(index)}
              />

              <span
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none',
                  color: todo.done ? 'gray' : 'black',
                }}
                className="flex-1 text-center text-lg break-keep"
              >
                {todo.text}
              </span>

              <button
                className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
                onClick={() => deleteButton(index)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default List
