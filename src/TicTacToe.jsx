import Square from './square';
import CalculateWinner from './winner';
import { useState } from 'react';
import './TicTacToe.css';

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    
    const winner = CalculateWinner(squares);
    let status = '';
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (squares.every(square => square !== null)) {
      status = 'Draw';
    } else {
      status = 'Player: ' + (xIsNext ? 'X' : 'O');
    }
  
    function resetGame() {
      setSquares(Array(9).fill(null)); // Reset semua kotak
      setXIsNext(true); // Set pemain X untuk giliran pertama
    }
  
    function handleClick(i) {
      if (squares[i] || CalculateWinner(squares)) {
        return;
      }
  
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? 'x' : 'o';
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
        <div className="card-square">
          {squares.map((square, index) => (
            <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
          ))}
        </div>
        <button className="reset-btn" onClick={resetGame}>Reset Game</button>
      </div>
    );
  }

export default Game;