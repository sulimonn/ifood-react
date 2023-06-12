import Logo from '../../img/logo.svg'
import Button from '../ui/Button.jsx'
import Logged from "../ui/reg/Logged.jsx";
import Reg from './Reg';
import SubHeader from '../subheader/SubHeader';
import './Header.css';
import React, {useState, useEffect } from 'react';
import user from '../UserData.jsx'

const Header = ({setActive, active2, setActive2, location, setLocation}) => {
  const [empty, setEmpty] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  
  let ifis;
  ifis = JSON.parse(sessionStorage.getItem('user'));
  const [isLogged, setLogged] = useState(false)
  let ifLoc = JSON.parse(sessionStorage.getItem('location'));
  useEffect(() => { 
    if(ifLoc !== null){
        setLocation({
          id: ifLoc.id,
          title: ifLoc.title
        })
      }
      if(ifis !== null){
        setLogged(true)
        setUserData(ifis)}
      window.addEventListener('scroll', handleScroll, { passive: true });
     
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  function setUserData(value) {
    user.id = value.id 
    user.name = value.name 
    user.email = value.email
    user.pass = value.pass
  }

  useEffect(() => {
     if(location.id !== '')
        setEmpty(false)
    else setEmpty(true)
    },[location.id])


  return (
    <>
      <Reg  active={active2} setActive={setActive2} setLogged={setLogged} /> 
      <header>
          <div id="header" className="container">
              <a href="/restaurants" className="logo">
                  <img className="logopic" src={Logo} alt='logo'/>
              </a> 
              { !empty ? <a onClick={() => {setActive(true)} } className='head-location'>{location.title} 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg></a> : null} 
              {isLogged ? <Logged /> :  <Button setActive={setActive2} title="Начать!" />}
          </div>
      </header>
          {location.id === '' ? <SubHeader  location={location} setActive={setActive} onScroll={scrollPosition < 700 ? true : false} /> : null}
    </>
  )
}

export default Header