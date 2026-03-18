import { useState } from "react"
function Header() {
    const [date, setDate] = useState(new Date())

    /* 날짜 이동 버튼 함수*/
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

    return (
        /* 제목 및 날짜, 날짜 이동 버튼 */
        <>
        <div className="flex flex-col items-center gap-4">
            <h1 className="py-1 text-3xl text-black-500 font-bold">TO DO LIST</h1>
        
            <div className="flex flex-row px-2">
                <button className="px-2" onClick={prevButton}>◀</button>
                <h2>{date.toDateString()}</h2>
                <button className="px-2" onClick={nextButton}>▶</button>

            </div>
        </div>
        
        </>
    );
}
export default Header
