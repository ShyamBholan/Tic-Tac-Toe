import React, { useState } from 'react';
import circle from './Assets/circle.png';
import cross from './Assets/cross.png';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner,setWinner]=useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : 'Draw';
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setWinner(gameResult);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
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
        {winner && (
        <h2 className="text-green-600 text-xl mb-4">
          {winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}
        </h2>
      )}
        <div className="grid grid-cols-3 border border-black w-64">
          {board.map((cell, index) => renderCell(cell, index))}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={resetGame}>
        Reset Game
      </button>
      </div>
    </>
  );
};

export default TicTacToe;
