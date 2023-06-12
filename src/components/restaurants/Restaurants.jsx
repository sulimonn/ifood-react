import './Restaurants.css'
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import { useNavigate } from 'react-router-dom'

const Restaurants = () => {
  const navigate = useNavigate()
  const [restaurants, setRest] = useState([])
  const stop = true;
  const loadRestaurants = ()=>{
    Axios.get('http://localhost:8888/restaurants',
    ).then((response) => {
      setRest(response.data);
    })
  }
  useEffect (() => {
    loadRestaurants();
  },[stop])
  return (
    <section className="rest-s" >
        <div className="rest-s__container">
            <h1>Лучшие рестораны и кафе</h1>
            <div className="row" >
              {
                restaurants.map((val) => {;
                  return(
                    <a className="rest-s__rest"  onClick={()=>{
                      navigate(`/restaurants/${val.id}`)
                    }
                    }>
                      <img src={require('../../img/restimg/' + val.path)} id='rest' alt="image not found"/>
                      <label htmlFor="rest">{val.title}</label>
                    </a>
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}


export default Restaurants