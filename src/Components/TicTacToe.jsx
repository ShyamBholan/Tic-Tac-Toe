import React, { useState } from 'react';
import circle from './Assets/circle.png';
import cross from './Assets/cross.png';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderCell = (value, index) => (
    <div
      key={index}
      className="flex justify-center items-center w-full h-24 border border-black cursor-pointer"
      onClick={() => handleClick(index)}
    >
      {value === 'X' && <img src={cross} alt="Cross" className="w-10" />}
      {value === 'O' && <img src={circle} alt="Circle" className="w-10" />}
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-900 text-2xl font-bold mb-4">Tic Tac Toe Game</h1>
        <div className="grid grid-cols-3 border border-black w-64">
          {board.map((cell, index) => renderCell(cell, index))}
        </div>
        <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        // onClick={resetGame}
      >
        Reset Game
      </button>
      </div>
    </>
  );
};

export default TicTacToe;
