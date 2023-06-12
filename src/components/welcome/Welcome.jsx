import './Welcome.css';
import Modal from '../ui/Modal.jsx';
import Burger from '../../img/welcome.png'
import ModalLocations from '../ui/modalLocations/ModalLocations.jsx'
import CurrentLocation from '../ui/modalLocations/CurrentLocation';
import LocationInput from '../ui/location/LocationInput.jsx';
import { useState } from 'react';

const Welcome = ({active, setActive, location, setLocation}) => {
  const [currLoc, setCurrLoc] = useState(false);
  return(
    <>
      <div className="welcome">
        <div className='welcome__container'>
          <div className="welcome__pic">
            <img className='welcome__burger' src={Burger}/>
          </div>
          <div className="welcome__content">
            <h1>Доставка еды</h1>
            <p>Вы можете заказать здесь все что захотите</p>
            <LocationInput  active={active}  setActive={setActive} />
          </div>
        </div>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><style>
          </style><path d="M 0,400 C 0,400 0,200 0,200 C 170.40000000000003,194 340.80000000000007,188 489,207 C 637.1999999999999,226 763.2,270 918,273 C 1072.8,276 1256.4,238 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#F5EDDC" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </div>
    </>
  )
}

export default Welcome