import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ModalLocations.css'
const ModalLocations = ({setCurrLoc, location, setLocation, setActive}) => {
    const [locations, setLocations] = useState([])
    useEffect(()=>{
        Axios.post('http://localhost:8888/locations').then(res =>{
          setLocations(res.data)
        })
      }, [])
    const navigate = useNavigate();
  return (
    <div className='modalLocations'>
        <h2 className="mdl__header">Выберите адрес доставки</h2>
        {
            locations.map(element => {
                if (element.loc_id < 41)
                return (<div className="mdl__locations" key={element.loc_id} onClick={() => {
                    setLocation({
                      id: element.loc_id,
                      title: element.loc_name
                    })
                    const save = {
                      id: element.loc_id,
                      title: element.loc_name
                    }
                    sessionStorage.setItem('location', JSON.stringify(save))
                  
                   
                    setTimeout(()=>{
                      navigate('/restaurants')
                      setActive(false)
                    },100)
                  }}>
                                <a href='#'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="flag" viewBox="0 0 16 16">
                                            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                                        </svg>
                                    </span>
                                    <p>{element.loc_name}</p>
                                </a>
                            </div>) 
                
            })
        }
        <div className="mdl__add-loc">
            <a onClick={()=>setCurrLoc(true)} href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>Добавить другой адрес</a>
            </div>
    </div>
  )
}

export default ModalLocations