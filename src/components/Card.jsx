/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function Card(props) {
  const [wasClicked, setWasClicked] = useState(false);

  function handleClick() {
    setWasClicked(!wasClicked);
    if (wasClicked){
      props.endGame();
    } else {
      props.incrementScore();
    }
    props.shuffleCards();
  }

  useEffect(() => {
    if (props.gameOver) {
      setWasClicked(false);
    }
  }, [props.gameOver]);

  return(
    <button className='card-btn'>
      <img src={props.image} alt={props.desc} className='card' onClick={handleClick} />
    </button>
  )
}