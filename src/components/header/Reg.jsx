import React,{ useState} from 'react'
import Modal from '../ui/Modal.jsx';
import Registration from "../ui/reg/Registration.jsx";
import Authorosize from '../ui/reg/Authorosize';

const Reg = ({active, setActive, setLogged}) => {
    const [auth, setAuth] = useState(true);
  return(
    <>
        <Modal id='reg' active={active} setActive={setActive}> 
            {auth ? <Registration setAuth={setAuth} setActive={setActive} setLogged={setLogged}/> : <Authorosize setLogged={setLogged} setAuth={setAuth}  setActive={setActive}/>}
        </Modal> 
    </>
  )
}

export default Reg