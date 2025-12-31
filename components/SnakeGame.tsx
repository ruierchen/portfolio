
import React, { useState, useEffect, useCallback, useRef } from 'react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gameLoopRef = useRef<number | null>(null);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setFood(generateFood());
  };

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const newHead = {
        x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
        y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE,
      };

      // Check collision with self
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, generateFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    gameLoopRef.current = window.setInterval(moveSnake, 150);
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [moveSnake]);

  return (
    <div className="flex flex-col items-center p-6 glass-card rounded-xl border border-cyan-500/30">
      <div className="flex justify-between w-full mb-4 px-2">
        <h3 className="tech-font text-cyan-400">NEURAL_SNAKE.EXE</h3>
        <span className="mono-font text-emerald-400">SCORE: {score.toString().padStart(4, '0')}</span>
      </div>

      <div className="relative bg-slate-900/80 border border-slate-700 grid" 
           style={{ 
             gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
             width: '300px',
             height: '300px'
           }}>
        {/* Render Snake */}
        {snake.map((seg, i) => (
          <div 
            key={i}
            className={`absolute ${i === 0 ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'bg-cyan-600/60'}`}
            style={{
              width: `${100 / GRID_SIZE}%`,
              height: `${100 / GRID_SIZE}%`,
              left: `${(seg.x * 100) / GRID_SIZE}%`,
              top: `${(seg.y * 100) / GRID_SIZE}%`,
              borderRadius: '2px'
            }}
          />
        ))}
        {/* Render Food */}
        <div 
          className="absolute bg-rose-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.8)] animate-pulse"
          style={{
            width: `${100 / GRID_SIZE}%`,
            height: `${100 / GRID_SIZE}%`,
            left: `${(food.x * 100) / GRID_SIZE}%`,
            top: `${(food.y * 100) / GRID_SIZE}%`,
          }}
        />

        {gameOver && (
          <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center z-10">
            <h4 className="tech-font text-rose-500 text-2xl mb-4">CRITICAL FAILURE</h4>
            <button 
              onClick={resetGame}
              className="px-4 py-2 bg-cyan-500 text-slate-950 tech-font font-bold rounded hover:bg-cyan-400 transition-colors"
            >
              REBOOT_SESSION
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-slate-500 italic flex items-center gap-2">
        <span className="p-1 border border-slate-700 rounded">ARROWS</span>
        <span>TO CONTROL INPUT VECTOR</span>
      </div>
    </div>
  );
};

export default SnakeGame;
