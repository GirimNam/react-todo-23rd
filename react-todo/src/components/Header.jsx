import { useEffect, useState } from 'react'

function Header() {
  const [date, setDate] = useState(new Date()) //바로 Date() 객체 만들어서 date 변수값 설정

  /* 배경색 요일별로 설정 */
  const rainbowColors = [
    '#f9d6d6',
    '#FFD6A5',
    '#f8f9ca',
    '#e7ffe2',
    '#c7f4f8',
    '#A0C4FF',
    '#d1cafd',
  ]

  useEffect(() => {
    const dayIndex = date.getDay()
    const shiftIndex = (dayIndex + 6) % 7
    const color = rainbowColors[shiftIndex]

    document.body.style.backgroundColor = color
  }, [date])

  /* 날짜 이동 버튼 함수 */
  const prevButton = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)
  }

  const nextButton = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)
  }

  const formatted = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`

  return (
    /* 제목 및 날짜, 날짜 이동 버튼 */
    <header className="flex flex-col items-center gap-4">
      <h1 className="py-1 text-3xl text-black-500 font-bold">TO DO LIST</h1>

      <div className="flex flex-row px-2">
        <button className="px-2" onClick={prevButton}>
          ◀
        </button>
        <h2>{formatted}</h2>
        <button className="px-2" onClick={nextButton}>
          ▶
        </button>
      </div>
    </header>
  )
}
export default Header
