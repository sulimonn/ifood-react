import './Registration.css'
import React, { useState} from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import user from '../../UserData.jsx'
const Registration = ({setAuth, setActive, setLogged}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isExist, setExist] = useState(false);
  const [data, setData] = useState([])
  function setUserData(value) {
    Axios.put(`http://localhost:8888/registration/id`, {
      clientEmail: email
    }).then(
      (res) => {
        user.id = res.data[0].acc_id
        user.name = res.data[0].name
        user.email = res.data[0].email
        user.pass = res.data[0].pass
        sessionStorage.setItem('user', JSON.stringify(user));
      }
    )
  }


  function handleSubmit(e){
    e.preventDefault();
    Axios.post('http://localhost:8888/registration', {
      clientName: name, 
      clientEmail: email,
      clientPassword: password,
    }).then((res) => {
      alert(res.data.message)
        if (res.data.status === 2) {
          setExist(true);
        }
        else{
          setActive(false);
          setLogged(true)
          setData(res.data)

          setUserData(email)

        }
    })
  }


  function disableButton (){
    if(name === '' || '' === email || '' === password) return true
    else return false
  }

  return (
    <>
      <div className='registration'>
        <h1 className="reg_title">Зарегистрироваться в <span> ifood</span></h1>
        <hr />
        <form onSubmit={handleSubmit} className="reg__input-group">
          <div className="reg__input">
            <span className= {name ==='' ? 'empty' : 'full'}>Имя</span>
            <input type="text" onChange={(e) => setName(e.target.value)} autoFocus />
          </div>
          <div className="reg__input">
            <span className= {email ==='' ? 'empty' : 'full'}>Aдрес эл.почты</span>
            <input type="email" className= {isExist === true ? 'isExist' : 'notExist'} onChange={(e) => {setExist(false);setEmail(e.target.value)}}/>
          <div className="alreadyExists" hidden={!isExist ? true : false}>
            <span>This email already exists</span>
          </div>
          </div>
          <div className="reg__input">
            <span className= {password ==='' ? 'empty' : 'full'}>Пароль</span>
            <input type="password"   onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <div className="button">
              <button type='submit' onSubmit={handleSubmit} className={disableButton() ? "btn disable" : 'btn'}>Зарегистривоваться</button>
          </div>
        </form>
        
        <div className="reg__footer">
          <p>Уже зарегистрированы? <a onClick={() => setAuth(false)}>Войти</a></p>
        </div>
      </div>
    </>
  )
}

export default Registration