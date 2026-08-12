import React from 'react'

 
const now = () => {
  return (
    <div>
        <div className="bg-gray-200 h-64 border">
            sfng;d/m 
            
            <h1 className=" border  justify-center items-center text-3xl font-bold text-gray-800 flex max-w-2xl mx-auto bg-white shadow-2xl shadow-regal-blue  ">
                Now
            </h1>
            <div className="relative">
                <div className=" absolute -inset-1 bg-gradient-to-r from-blue-400 to-red-200 border blur"></div>
                <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded divide-x  shadow-lg shadow-blue-500/50 relative">
                    <span className="pr-3">now roar</span>
                    <span className="pl-3">now roar louder  </span>
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default now
