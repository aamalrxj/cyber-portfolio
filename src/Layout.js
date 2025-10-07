import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Credentials', path: '/credentials' },
];

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Minimax algorithm for unbeatable AI
function minimax(squares, isMaximizing) {
  const winner = calculateWinner(squares);
  if (winner === 'O') return { score: 10 };
  if (winner === 'X') return { score: -10 };
  if (squares.every(square => square !== null)) return { score: 0 };

  const moves = [];
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      const newSquares = squares.slice();
      newSquares[i] = isMaximizing ? 'O' : 'X';
      const result = minimax(newSquares, !isMaximizing);
      moves.push({ idx: i, score: result.score });
    }
  }

  let bestMove;
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (const move of moves) {
      if (move.score > bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    }
  } else {
    let bestScore = Infinity;
    for (const move of moves) {
      if (move.score < bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    }
  }
  return bestMove;
}

function computerMove(squares) {
  const bestMove = minimax(squares, true);
  if (bestMove && bestMove.idx !== undefined) {
    const next = squares.slice();
    next[bestMove.idx] = 'O';
    return next;
  }
  return squares;
}

function TicTacToeGame({ accentColor, lightMode }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [status, setStatus] = useState('Your turn! (X)');
  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(Boolean);

  // Handle player move
  function handleClick(i) {
    if (winner || squares[i] || !isPlayerTurn) return;
    const next = squares.slice();
    next[i] = 'X';
    setSquares(next);
    setIsPlayerTurn(false);

    // Check for win or draw before computer moves
    const playerWin = calculateWinner(next);
    if (playerWin) {
      setStatus('You win! 🎉');
      return;
    }
    if (next.every(Boolean)) {
      setStatus("It's a draw!");
      return;
    }

    // Computer move after a short delay
    setTimeout(() => {
      const afterComp = computerMove(next);
      setSquares(afterComp);
      setIsPlayerTurn(true);
      const compWin = calculateWinner(afterComp);
      if (compWin) {
        setStatus('Computer wins! 🤖');
      } else if (afterComp.every(Boolean)) {
        setStatus("It's a draw!");
      } else {
        setStatus('Your turn! (X)');
      }
    }, 700);
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setIsPlayerTurn(true);
    setStatus('Your turn! (X)');
  }

  return (
    <div style={{ width: '100%', textAlign: 'center', minHeight: 300 }}>
      <h2 style={{ color: accentColor, marginBottom: '1rem' }}>Tic-Tac-Toe vs Computer</h2>
      <div style={{ marginBottom: '1.2rem', fontWeight: 600, color: lightMode ? '#222' : '#fff' }}>
        {status}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 60px)',
          gridTemplateRows: 'repeat(3, 60px)',
          gap: '8px',
          justifyContent: 'center',
          margin: '0 auto 1.2rem auto',
        }}
      >
        {squares.map((val, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            style={{
              width: 60,
              height: 60,
              fontSize: '2rem',
              fontWeight: 700,
              color: val === 'X' ? accentColor : (val === 'O' ? '#00E676' : lightMode ? '#222' : '#fff'),
              background: lightMode ? '#fff' : '#222',
              border: `2px solid ${accentColor}`,
              borderRadius: 10,
              cursor: winner || squares[idx] || !isPlayerTurn ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s, color 0.2s',
              outline: 'none',
            }}
            disabled={!!winner || !!squares[idx] || !isPlayerTurn}
          >
            {val}
          </button>
        ))}
      </div>
      {(winner || isBoardFull) && (
        <button
          onClick={handleRestart}
          style={{
            background: accentColor,
            color: '#fff',
            border: 'none',
            borderRadius: '2em',
            padding: '0.7rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 700,
            cursor: 'pointer',
            marginTop: '0.7rem',
            transition: 'all 0.3s',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          Play Again
        </button>
      )}
    </div>
  );
}

export default function Layout() {
  const [lightMode, setLightMode] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();

  const bgColor = lightMode ? '#fff' : '#181a1b';
  const logoColor = lightMode ? '#111' : '#fff';
  const logoRed = '#FF1744';
  const darkRed = '#B71C1C';
  const codeBoxBg = lightMode ? '#f8f8f8' : 'rgba(20,22,40,0.95)';
  const codeTextColor = lightMode ? '#d32f2f' : '#39FF14';

  // Only show code box on home page
  const showCodeBox = location.pathname === '/';

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: bgColor,
      fontFamily: "'Quicksand', 'Patua One', 'Bellota Text', sans-serif",
      transition: 'background 0.4s',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top bar: Logo+toggle left, Nav right */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2.5rem 3.5rem 0 3.5rem',
        boxSizing: 'border-box',
      }}>
        {/* Left: Logo and Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{
            fontFamily: "'Patua One', cursive",
            fontWeight: 700,
            fontSize: '1.5rem',
            letterSpacing: '1.5px',
            color: logoColor,
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
          }}>
            &lt;&gt; DEV<span style={{ color: logoRed }}>eloper</span>
          </span>
          <button
            onClick={() => setLightMode(l => !l)}
            aria-label="Toggle dark/light mode"
            aria-pressed={lightMode}
            style={{
              background: lightMode ? '#FF1744' : '#222',
              border: 'none',
              borderRadius: '2em',
              width: 64,
              height: 32,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              padding: 0,
              transition: 'background 0.3s',
              boxShadow: lightMode
                ? '0 2px 12px rgba(255,23,68,0.08)'
                : '0 2px 12px rgba(255,255,255,0.05)',
              outline: 'none',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: lightMode ? 0 : 1,
                transition: 'opacity 0.3s',
              }}
            >
              🌙
            </span>
            <span
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: lightMode ? 1 : 0,
                transition: 'opacity 0.3s',
              }}
            >
              ☀️
            </span>
            <span
              style={{
                position: 'absolute',
                top: 4,
                left: lightMode ? 32 : 4,
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                transition: 'left 0.3s ease',
                zIndex: 2,
              }}
            />
          </button>
        </div>
        {/* Right: Navigation */}
        <nav style={{
          display: 'flex',
          gap: '1.2rem',
        }}>
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              onMouseEnter={() => setHoveredNav(item.name)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                border: `2px solid ${
                  hoveredNav === item.name ? darkRed : (lightMode ? '#111' : '#fff')
                }`,
                borderRadius: '2em',
                padding: '0.45em 1.5em',
                cursor: 'pointer',
                fontWeight: 700,
                color: hoveredNav === item.name
                  ? '#fff'
                  : (lightMode ? '#111' : '#fff'),
                background: hoveredNav === item.name
                  ? darkRed
                  : 'transparent',
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '1.05rem',
                outline: 'none',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s, border 0.2s',
                boxShadow: hoveredNav === item.name
                  ? '0 2px 8px rgba(183,28,28,0.18)'
                  : 'none',
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Main content and code box */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        minHeight: 0,
      }}>
        <div style={{
          width: showCodeBox ? '50vw' : '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingLeft: '8vw',
          color: lightMode ? '#000' : '#fff',
          transition: 'width 0.3s',
        }}>
          <Outlet context={[lightMode]} />
        </div>
        {showCodeBox && (
          <div style={{
            width: '50vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '80%',
              maxWidth: 500,
              background: codeBoxBg,
              color: codeTextColor,
              fontFamily: "'Fira Mono', 'Consolas', 'Menlo', monospace",
              fontSize: '1.05rem',
              borderRadius: '1.2em',
              boxShadow: '0 8px 32px 0 rgba(31,38,135,0.17)',
              padding: '2rem 1.5rem 1.5rem 1.5rem',
              minHeight: 300,
              whiteSpace: 'pre',
              overflowX: 'auto',
              border: '1.5px solid #222',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'background 0.3s, color 0.3s',
            }}>
              <div style={{
                display: 'flex',
                gap: '0.5em',
                position: 'absolute',
                top: 18,
                right: 18,
                zIndex: 2,
              }}>
                <span style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: '#FFD600',
                }} />
                <span style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: '#00E676',
                }} />
                <span style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: '#FF1744',
                }} />
              </div>
              {/* XOXO Game */}
              <TicTacToeGame accentColor="#FF1744" lightMode={lightMode} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
