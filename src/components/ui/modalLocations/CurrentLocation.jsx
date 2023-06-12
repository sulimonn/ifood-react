import React, { useEffect, useState } from 'react'
import './dropdowns/Dropdowns.css'
import './ModalLocations.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'



const CurrentLocation = ({setCurrLoc, location, setLocation, setActive}) => {
  const [locations, setLocations] = useState([])
  const [newLoc, setNewLoc] = useState('');
  useEffect(()=>{
    Axios.post('http://localhost:8888/locations').then(res =>{
      setLocations(res.data)
    })
  }, [])
  const navigate = useNavigate();
  
  return (
    <div className='currentLocation'>
      <a href="#" className='back' onClick={()=>setCurrLoc(false)}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Back"><path d="M14.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L6.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,14.5,22Z"/></g></svg></a>
      <h2 className="mdl__header">Выберите адрес доставки</h2>
      <div className='corrloc__conatainer'>
        <div className="loc_data">
          <div className="search_loc">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="flag" viewBox="0 0 16 16">
              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
          </svg>
            <div className='search_loc_input'>
              <input  type="text" placeholder='Поиск улицы, города, района...' value={newLoc} onChange={e => setNewLoc(e.target.value)} autoFocus/>
              <span  className={newLoc === '' ? 'bottom' : 'top'}>Адрес вашего района</span>
            </div>
          </div>
            <div className="dropdown">
              {
                locations
                  .filter((item) => {
                    const searchTerm = newLoc.toLowerCase();
                    const locat = item.loc_name.toLowerCase();
      
                    return (
                      searchTerm &&
                      locat.startsWith(searchTerm) &&
                      locat !== searchTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item) => (
                    <div
                      onClick={() => {
                        setLocation({
                          id: item.loc_id,
                          title: item.loc_name
                        })
                          const save = {
                            id: item.loc_id,
                            title: item.loc_name
                          }
                          sessionStorage.setItem('location', JSON.stringify(save))
                        
                        setNewLoc(item.loc_name)
                        setTimeout(()=>{
                          navigate('/restaurants')
                          setActive(false)
                        },100)
                      }}
                      className="dropdown-row"
                      key={item.loc_id}
                    >
                      {item.loc_name}
                    </div>
                  ))
              }
            </div>
        </div>
        <div className="loc__img">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25604.00322580996!2d74.58924185575496!3d42.85768487050121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1671436989606!5m2!1sru!2skg" width="300" height="250" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>        </div>
      </div>
    </div>
  )
}

export default CurrentLocation