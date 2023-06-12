import React from 'react'
import LocationInput from '../ui/location/LocationInput'
import './SubHeader.css'
import Modal from '../ui/Modal'
import CurrentLocation from '../ui/modalLocations/CurrentLocation'
import ModalLocations from '../ui/modalLocations/ModalLocations'
const SubHeader = ({onScroll, setActive, setLocation, location, active}) => {
  return (
    <>

      <div className={onScroll ? 'subhead hide':  'subhead show'}>
          <div className="sh__container">
              <p className="sh__title">Введите ваш адрес, чтобы увидеть заведения возле вас</p>
              <LocationInput setActive={setActive} />
          </div>
      </div>
    </>
  )
}

export default SubHeader