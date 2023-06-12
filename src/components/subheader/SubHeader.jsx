import React from 'react'
import LocationInput from '../ui/location/LocationInput'
import './SubHeader.css'
const SubHeader = ({onScroll, setActive}) => {
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