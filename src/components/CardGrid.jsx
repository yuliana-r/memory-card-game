import Card from './Card'

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
import '../index.css';

export default function CardGrid() {
  const cards = [
    {
      image: BackCat,
      desc: 'Cat facing away showing its back'
    },
    {
      image: SideCat,
      desc: 'Cat depicted in profile'
    },
    {
      image: RollingCat,
      desc: 'Cat rolling on its back'
    },
    {
      image: JumpyCat,
      desc: 'Jumping cat being chased by another cat'
    },
    {
      image: LandingCat,
      desc: 'Cat landing facing forward'
    },
    {
      image: CuriousCat,
      desc: 'Cat curiously looking at you'
    },
    {
      image: WalkingCat,
      desc: 'Cat walking to the left while looking at you'
    },
    {
      image: FishCat,
      desc: 'Cat with yellow fish in its mouth'
    },
    {
      image: RunningCat,
      desc: 'Cat depicted in profile running to the right'
    },
    {
      image: FlyCat,
      desc: 'Cat depicted catching a  fly'
    },
    {
      image: SillyCat,
      desc: 'Cat depicted standing on its back legs'
    },
    {
      image: MeerCat,
      desc: 'Cat depicted sitting on its bum like a meerkat'
    },
    {
      image: StretchyCat,
      desc: 'Cat depicted stretching with its bottom up'
    },
    {
      image: LazyCat,
      desc: 'Lazy cat laying down'
    },
    {
      image: TailCat,
      desc: 'Cat depicted with its tail coming from above'
    },
    {
      image: SplitCat,
      desc: 'Cat depicted leaving the top left corner and entering the bottom right cotner'
    },
    {
      image: TripleCat,
      desc: 'Cat head depicted in 3 different sizes'
    },
    {
      image: MissionCat,
      desc: 'Cat depicted walking determined to the left'
    },
    {
      image: YarnCat,
      desc: 'Cat depicted playing with a yellow ball of yarn'
    },
    {
      image: DoubleCat,
      desc: 'Whimsical illustration of conjoined upper cat halves'
    },
    {
      image: CatOnTailCat,
      desc: 'Curious cat gazing at its tail\'s end shaped like a mini cat head'
    },
    {
      image: ReverseFishCat,
      desc: 'Yellow cat with black and white fish in its mouth'
    }
  ]

  

  return(
    <div className="cards" >
      {cards.map(card => {
        return  <Card key={card.desc} image={card.image} desc={card.desc} />
      })}
    </div>
  )
}