import React from 'react'
import './ContentRest.css'
import { useNavigate } from 'react-router-dom'
import user from '../../UserData'

const Cards = ({ src, data, setRestId }) => {
  const navigate = useNavigate()
  return (
    <div className='card' key={data.id} onClick= {() => {
      setRestId(data.id)
      user.rest = data.id
      setTimeout(()=> {
        navigate(`/restaurants/${data.id}`)
      }, 100)
    }}>
        <div className='card__img'>
            <img src={require('../../../img/restimg/' + src)} id="img__title" />
        </div>
            <span><h3>{data.title}</h3> <p>{data.cat_title}</p></span>
    </div>
  )
}

export default Cards