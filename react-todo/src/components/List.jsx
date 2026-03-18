function List({ todos, setTodos }) {
  const deleteButton = (index) => {
    setTodos(todos.filter((_, i) => i !== index)) //삭제할 인덱스 i만 빼고 남겨라, _는 배열 안의 값(안씀)
  }

  const checkBox = (index) => {
    const newTodos = [...todos] //기존 배열을 직접 수정하는게 아니라 복사 후 수정
    newTodos[index].done = !newTodos[index].done //done은 todo에 들어가는 객체의 속성
    setTodos(newTodos)
  }

  return (
    <section>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="output">
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
              >
                {todo.text}
              </span>

              <button className="delete" onClick={() => deleteButton(index)}>
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
