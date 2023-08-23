/* eslint-disable react/prop-types */
import BackCat from '../assets/images/charlie-cat-1.png';
import SideCat from '../assets/images/charlie-cat-2.png'
import RollingCat from '../assets/images/charlie-cat-3.png'
import JumpyCat from '../assets/images/charlie-cat-4.png'
import LandingCat from '../assets/images/charlie-cat-5.png'
import CuriousCat from '../assets/images/charlie-cat-6.png'
import WalkingCat from '../assets/images/charlie-cat-7.png'
import FishCat from '../assets/images/charlie-cat-8.png'
import RunningCat from '../assets/images/charlie-cat-9.png'
import FlyCat from '../assets/images/charlie-cat-10.png'
import SillyCat from '../assets/images/charlie-cat-11.png'
import MeerCat from '../assets/images/charlie-cat-12.png'
import StretchyCat from '../assets/images/charlie-cat-13.png'
import LazyCat from '../assets/images/charlie-cat-14.png'
import TailCat from '../assets/images/charlie-cat-15.png'
import SplitCat from '../assets/images/charlie-cat-16.png'
import TripleCat from '../assets/images/charlie-cat-17.png'
import MissionCat from '../assets/images/charlie-cat-18.png'
import YarnCat from '../assets/images/charlie-cat-19.png'
import DoubleCat from '../assets/images/charlie-cat-20.png'
import CatOnTailCat from '../assets/images/charlie-cat-21.png'
import ReverseFishCat from '../assets/images/charlie-cat-22.png'

import Card from './Card';
import { useState } from 'react';
import '../styles/index.css';

export default function CardGrid(props) {
  const cardsArray = [
    {
      id: 0,
      image: BackCat,
      desc: 'Cat facing away showing its back'
    },
    {
      id: 1,
      image: SideCat,
      desc: 'Cat depicted in profile'
    },
    {
      id: 2,
      image: RollingCat,
      desc: 'Cat rolling on its back'
    },
    {
      id: 3,
      image: JumpyCat,
      desc: 'Jumping cat being chased by another cat'
    },
    {
      id: 4,
      image: LandingCat,
      desc: 'Cat landing facing forward'
    },
    {
      id: 5,
      image: CuriousCat,
      desc: 'Cat curiously looking at you'
    },
    {
      id: 6,
      image: WalkingCat,
      desc: 'Cat walking to the left while looking at you'
    },
    {
      id: 7,
      image: FishCat,
      desc: 'Cat with yellow fish in its mouth'
    },
    {
      id: 8,
      image: RunningCat,
      desc: 'Cat depicted in profile running to the right'
    },
    {
      id: 9,
      image: FlyCat,
      desc: 'Cat depicted catching a  fly'
    },
    {
      id: 10,
      image: SillyCat,
      desc: 'Cat depicted standing on its back legs'
    },
    {
      id: 11,
      image: MeerCat,
      desc: 'Cat depicted sitting on its bum like a meerkat'
    },
    {
      id: 12,
      image: StretchyCat,
      desc: 'Cat depicted stretching with its bottom up'
    },
    {
      id: 13,
      image: LazyCat,
      desc: 'Lazy cat laying down'
    },
    {
      id: 14,
      image: TailCat,
      desc: 'Cat depicted with its tail coming from above'
    },
    {
      id: 15,
      image: SplitCat,
      desc: 'Cat depicted leaving the top left corner and entering the bottom right cotner'
    },
    {
      id: 16,
      image: TripleCat,
      desc: 'Cat head depicted in 3 different sizes'
    },
    {
      id: 17,
      image: MissionCat,
      desc: 'Cat depicted walking determined to the left'
    },
    {
      id: 18,
      image: YarnCat,
      desc: 'Cat depicted playing with a yellow ball of yarn'
    },
    {
      id: 19,
      image: DoubleCat,
      desc: 'Whimsical illustration of conjoined upper cat halves'
    },
    {
      id: 20,
      image: CatOnTailCat,
      desc: 'Curious cat gazing at its tail\'s end shaped like a mini cat head'
    },
    {
      id: 21,
      image: ReverseFishCat,
      desc: 'Yellow cat with black and white fish in its mouth'
    }
  ]

  const [cards, setCards] = useState(cardsArray);

  function shuffle(arr) {
    let currentIndex = arr.length;
    while (currentIndex !== 0) {
      let i = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      let t = arr[currentIndex];
      arr[currentIndex] = arr[i];
      arr[i] = t;
    }
    return arr;
  }

  function shuffleCards() {
    setCards(shuffle(cardsArray));
  }

  return(
    <div className="cards-grid flex-center" >
      {cards.map(card => {
        return  <Card 
          key={card.id} 
          image={card.image} 
          desc={card.desc}
          shuffleCards={shuffleCards}
          incrementScore={props.incrementScore}
          gameOver={props.gameOver} 
          endGame={props.endGame} />
      })}
    </div>
  )
}