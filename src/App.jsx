import CardGrid from './components/CardGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import '../src/styles/index.css';
import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function endGame() {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setGameOver(true);
  }

  function incrementScore() {
    setScore(prevScore => prevScore + 1);
    setGameOver(false);
  }

  return(<>
    <Header />
    <main>
      <Info 
        score={score} 
        bestScore={bestScore}/>
      <CardGrid
        incrementScore={incrementScore}
        gameOver={gameOver}
        endGame={endGame} />
    </main>
    
    <Footer />
  </>)
}

