import { useEffect } from 'react'

function Header({ date, setDate }) {
  /* 배경색 전역변수로 요일별로 설정 */
  const RAINBOW_COLORS = [
    '#f9d6d6',
    '#FFD6A5',
    '#f8f9ca',
    '#e7ffe2',
    '#c7f4f8',
    '#A0C4FF',
    '#d1cafd',
  ]

  useEffect(() => {
    const dayIndex = date.dayOfWeek
    const shiftIndex = (dayIndex + 6) % 7
    const color = RAINBOW_COLORS[shiftIndex]

    document.body.style.backgroundColor = color
  }, [date])

  /* 날짜 이동 버튼 함수 */
  const prevButton = () => {
    setDate(date.subtract({ days: 1 }))
  }

  const nextButton = () => {
    setDate(date.add({ days: 1 }))
  }

  const formatted = `${date.year}년 ${date.month}월 ${date.day}일`

  return (
    /* 제목 및 날짜, 날짜 이동 버튼  */
    <header className="flex flex-col items-center gap-4">
      <h1 className="py-1 text-3xl text-black-500 font-bold">TO DO LIST</h1>

      <div className="flex flex-row p-2">
        <button
          className="px-2"
          onClick={prevButton}
        >
          ◀
        </button>
        <h2>{formatted}</h2>
        <button
          className="px-2"
          onClick={nextButton}
        >
          ▶
        </button>
      </div>
    </header>
  )
}
export default Header
