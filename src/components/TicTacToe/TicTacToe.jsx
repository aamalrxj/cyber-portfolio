import { useState } from "react";
import "./TicTacToe.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

function minimax(board, isMaximizing) {
  const winner = calculateWinner(board);

  if (winner === "O") return { score: 10 };
  if (winner === "X") return { score: -10 };

  if (board.every(Boolean))
    return {
      score: 0,
    };

  const moves = [];

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const copy = [...board];

      copy[i] = isMaximizing ? "O" : "X";

      const result = minimax(copy, !isMaximizing);

      moves.push({
        index: i,
        score: result.score,
      });
    }
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    let bestMove = null;

    moves.forEach((move) => {
      if (move.score > bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    });

    return bestMove;
  } else {
    let bestScore = Infinity;
    let bestMove = null;

    moves.forEach((move) => {
      if (move.score < bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    });

    return bestMove;
  }
}

export default function TicTacToe({
  accentColor = "#FF1744",
  lightMode = false,
}) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [status, setStatus] = useState("Your Turn (X)");

  const winner = calculateWinner(board);

  const boardFull = board.every(Boolean);

  const computerMove = (currentBoard) => {
    const move = minimax(currentBoard, true);

    if (!move) return currentBoard;

    const next = [...currentBoard];
    next[move.index] = "O";

    return next;
  };

  function handleClick(index) {
    if (!playerTurn || board[index] || winner) return;

    const next = [...board];
    next[index] = "X";

    setBoard(next);
    setPlayerTurn(false);

    const playerWinner = calculateWinner(next);

    if (playerWinner) {
      setStatus("You Win 🎉");
      return;
    }

    if (next.every(Boolean)) {
      setStatus("Draw");
      return;
    }

    setTimeout(() => {
      const aiBoard = computerMove(next);

      setBoard(aiBoard);
      setPlayerTurn(true);

      const aiWinner = calculateWinner(aiBoard);

      if (aiWinner) {
        setStatus("Computer Wins 🤖");
      } else if (aiBoard.every(Boolean)) {
        setStatus("Draw");
      } else {
        setStatus("Your Turn (X)");
      }
    }, 500);
  }

  function restart() {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
    setStatus("Your Turn (X)");
  }

  return (
    <div className="ttt">
      <h2 style={{ color: accentColor }}>
        Tic-Tac-Toe
      </h2>

      <p>{status}</p>

      <div className="ttt-board">
        {board.map((value, index) => (
          <button
            key={index}
            className="ttt-cell"
            onClick={() => handleClick(index)}
            disabled={!playerTurn || value || winner}
            style={{
              borderColor: accentColor,
              color:
                value === "X"
                  ? accentColor
                  : value === "O"
                  ? "#00E676"
                  : lightMode
                  ? "#111"
                  : "#fff",
            }}
          >
            {value}
          </button>
        ))}
      </div>

      {(winner || boardFull) && (
        <button
          className="ttt-restart"
          onClick={restart}
          style={{ background: accentColor }}
        >
          Play Again
        </button>
      )}
    </div>
  );
}