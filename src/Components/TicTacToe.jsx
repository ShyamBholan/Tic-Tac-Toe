import React, { useState } from 'react';
import circle from './Assets/circle.png';
import cross from './Assets/cross.png';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return; // Prevent overwriting a filled cell
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderCell = (value, index) => (
    <div
      key={index}
      className="p-12 border border-black flex justify-center items-center"
      onClick={() => handleClick(index)}
    >
      {value === 'X' && <img src={cross} alt="Cross" className="w-10" />}
      {value === 'O' && <img src={circle} alt="Circle" className="w-10" />}
    </div>
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-red-900 text-2xl font-bold mb-4">Tic Tac Toe Game</h1>
        <div className="container w-2/5 grid grid-cols-3 gap-2 bg-cyan-500">
          {board.map((cell, index) => renderCell(cell, index))}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
