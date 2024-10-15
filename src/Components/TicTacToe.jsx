import React from 'react'
import circle from './Assets/circle.png'
import cross from './Assets/cross.png'
const TicTacToe = () => {
  return (
    <>
     <div className="flex flex-col justify-center items-center">
     <h1 className='text-red-900'>Tic Tac Toe Game</h1>
      <div className="container w-2/5 flex align-middle grid grid-cols-3 m-5 bg-cyan-500">
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
        <div className=" p-12 border border-black"></div>
      </div>
     </div>
    </>
  )
}

export default TicTacToe