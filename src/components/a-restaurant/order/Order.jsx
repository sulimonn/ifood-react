import React, { useState } from 'react'
import order from './order-price'
import Modal from '../../ui/Modal'
import './order.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import user from '../../UserData'

const Order = () => {
  const navigate = useNavigate()
  console.log(order);
  const prod = order.price
  const dost = 100
  const serv = 8
  const vsego = prod + serv + dost
  const [active, setActive] = useState(false)
  function orders(){
    setActive(true)
    axios.post('http://localhost:8888/order', {
      amount: vsego,
      user: user.id,
      rest: user.rest
    })
  }
  return (
    <>
      <Modal active={active} setActive={setActive}>
        <div className="thanks">
          <h2>Спасибо что вы заказали с нашего сайта!</h2>
          <p>Ваш заказ будет доставлен в течении 20-30 мин</p>
          <div className="toHomepage"><button onClick={() => navigate('/restaurants')}>Назад</button></div>
        </div>
      </Modal>
      <div className='order-confirm'>
        <div className="order-conf--content">
          <div className="order-conf-container">
            <h1>Сводная информация</h1>
            <hr />
            <div className="products"><h3>Ресторан</h3> <h3>{order.rest}</h3></div>
            <div className="products"><p>Продукты</p> <p>{prod} KGS</p></div>
            <div className="products"><p>Доставка</p> <p>{dost} KGS</p></div>
            <div className="products"><p>Сервисный сбор</p> <p>{serv} KGS</p></div>
            <h2><p>ВСЕГО</p> <p>{vsego}  KGS</p></h2>
          </div>
          <div className="order-conf-btn">
            <button onClick={orders}>Подтвердить заказ</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default Order