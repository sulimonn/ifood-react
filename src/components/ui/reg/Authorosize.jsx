import './Registration.css'
import Axios from 'axios'
import React, { useState } from 'react'
import user from '../../UserData.jsx'
const Authorosize = ({setAuth, setActive, setLogged}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isExist, setExist] = useState(false); 
  function setUserData(value) {
    user.id = value.acc_id 
    user.name = value.name 
    user.email = value.email
    user.pass = value.pass
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  function check(val) {
      if(val.length !== 0){
          alert('Добро пожаловать ' + val[0].name)
          setEmail('');
          setPassword('');
          setActive(false);
          setAuth(true);
          setLogged(true)
          setUserData(val[0])
        }
      else {
        alert('Эл. почта или пароль введено неправильно')
        setExist(true)
      }
  }

  function handleSubmit(e){
    e.preventDefault();
    Axios.post('http://localhost:8888/authorization',{
      clientEmail: email,
      clientPassword : password
    }).then((res) => {
      check(res.data)
    }).catch((error) => console.error(error))
  }

  return (
    <div className='registration'>
        <h1 className="reg_title">Войти в <span>ifood</span></h1>
        <hr />
        <form className="reg__input-group" onSubmit={handleSubmit}>
          <div className="reg__input">
            <span className= {email ==='' ? 'empty' : 'full'}>Aдрес эл.почты</span>
            <input type="email" value={email === '' ? '' : email}  className= {isExist === true ? 'isExist' : 'notExist'} onChange={(e) => {setExist(false);setEmail(e.target.value)}} autoFocus />
          </div>
          <div className="reg__input">
            <span className= {password ==='' ? 'empty' : 'full'}>Пароль</span>
            <input type="password" value={password === '' ? '' : password} className= {isExist ? 'isExist' : 'notExist'} onChange={(e) => {setExist(false);setPassword(e.target.value)}} />
          </div>

          <div className="button">
              <button type='submit' className="btn">Войти</button>
          </div>
        </form>
        <div className="reg__footer">
          <p>Еще не зарегистрированы? <a onClick={() => setAuth(true)}>Регистрация</a></p>
        </div>
      </div>
  )
}


export default Authorosize