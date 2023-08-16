/* eslint-disable react/prop-types */
export default function Card(props) {
  return(
    <button className='card-btn'>
      <img src={props.image} alt={props.desc} className='card'/>
    </button>
  )
}