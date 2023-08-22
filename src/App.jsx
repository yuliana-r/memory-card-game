import CardGrid from './components/CardGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import Modal from './components/Modal';
import '../src/styles/index.css';
import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [outcome, setOutcome] = useState('');
  const [showModal, setShowModal] = useState(false);

  function endGame() {
    if (score > bestScore) {
      setBestScore(score);
    }
    setOutcome('lost');
    setShowModal(true);
    setScore(0);
    setGameOver(true);
  }

  function incrementScore() {
    setScore(prevScore => prevScore + 1);
    setGameOver(false);
    if (score == 21) {
      setOutcome('won');
      setShowModal(true);
      setScore(0);
      setGameOver(true);
      setBestScore(22);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
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
      {showModal && <Modal showModal={showModal} outcome={outcome} handleCloseModal={handleCloseModal} />}
    </main>
    <Footer />
  </>)
}

