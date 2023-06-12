import React, { useEffect, useState } from 'react'
import './corf.css'
import order from './order/order-price.js'
import astronaut from './astronaut-grey-scale.svg'
import { useNavigate } from 'react-router-dom'
const Corf = ({corf, addCorf}) => {
    const [price , setPrice] = useState(0)
    const navigate = useNavigate()
  let ifis;
  ifis = JSON.parse(sessionStorage.getItem('user'));
  const [isLogged, setLogged] = useState(false)
  useEffect(() => { 
      if(ifis !== null){
        setLogged(true)
      }
  });
    useEffect(()=>{
        let nprice = 0;
        for(let i = 0; i < corf.length; i++){
            nprice += +corf[i].price *corf[i].count 
        }
        setPrice(nprice)

    },[corf])
    function newPrice (index){
        let newCorf = corf
        if( newCorf[index].count > 1 )
            newCorf[index].count--
        else
            newCorf.splice(index, 1)

        addCorf(newCorf)

        let nprice = 0;
        for(let i = 0; i < corf.length; i++){
            nprice += +corf[i].price *corf[i].count 
        }
        setPrice(nprice)
    }
    function addFood(index) {
        let newCorf = corf
        newCorf[index].count++

        addCorf(newCorf)

        let nprice = 0;
        for(let i = 0; i < corf.length; i++){
            nprice += +corf[i].price *corf[i].count 
        }
        setPrice(nprice)
    }

  return (
    <div className='korzina'>
        <div className="corf_header">
            <h2>Ваш заказ</h2>
        </div>
        {corf.length === 0 ?
        <div className="corf_empty">
            <img src={astronaut} alt="" />
            <p>Пока что корзина пуста. Добавленные вами продукты будут отображаться здесь!</p>
        </div> :
        <div className="corf_full">
            <button onClick={() => {addCorf([]); setPrice(0)}}>Очистить все</button>
            <div className="corf_f">
                {
                corf.map((val, index) => {
        
                    return(
                        <div key={index} className='corf_foods'>
                            <div className="corf_food">
                                <span>x{val.count}</span>
                                <div className="food_name">{val.food}</div>
                                <div className="food_price">{val.price*val.count} KGS</div>
                            </div>
                            <div className="change_corf">
                                <div className="corf_delete" onClick={()=>{
                                    newPrice(index)
                                    }}
                                >-</div>
                                <div className="corf_add" onClick={()=>{
                                    addFood(index)
                                } }
                                >+</div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="corf_order_button">
                <button className="order_button" onClick={()=> {
                    if(isLogged){
                        order.price = price
                        order.rest = corf[0].title
                        order.id = corf[0].id
                        navigate('/order')
                    }
                    else{
                        alert('Зарегестрируйтесь или войдите')
                    }
                }
                }>Заказать за {price}</button>
            </div>
        </div>
        }
            
    </div>
  )
}

export default Corf