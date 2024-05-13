import { useState, useEffect } from "react"

export default function App() {
  const [data, setData] = useState(1)
   
  const changeData = () => {
    setTimeout(() => {
      setData(data + 1)
    }, 100)
  }

  useEffect(() => {
    if(data != 100) changeData()
  }, [data])

  return (

    <>
    <h1 className="text-3xl font-semibold text-center p-6">PROGRASS BAR</h1>
    <div className="w-1/2 relative m-auto bg-slate-600 h-8 rounded-lg overflow-hidden">
    <span className="absolute top-0 left-[48%] text-xl font-semibold" style={{color: data > 50 ? "white" : "black"}}>{data}</span>
      <div className="bg-red-500 h-8" style={{ width: `${data}%` }}></div>
    </div>
    </>
  )
}