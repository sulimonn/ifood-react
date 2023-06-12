import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Restaurants from "./components/restaurants/Restaurants";
import Delivery from "./components/delivery/Delivery";
import React,{ useState } from 'react'
import IndexRestaurants from "./components/indexRestaurants/IndexRestaurants";
import Modal from "./components/ui/Modal";
import CurrentLocation from "./components/ui/modalLocations/CurrentLocation";
import ModalLocations from "./components/ui/modalLocations/ModalLocations";
import ARest from "./components/a-restaurant/ARestaurant";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Order from './components/a-restaurant/order/Order.jsx'
import OrderHeader from './components/a-restaurant/order/OrderHeader'
let url = window.location.href 
function App() {
  const [modalRegActive, setRegModalActive] = useState(false);
  const[modalLocActive, setModalLocActive] = useState(false);
  const [location, setLocation] = useState({id: '', title: ''});
  const [currLoc, setCurrLoc] = useState(false);
  return (
    <>

    <Modal active={modalLocActive} setActive={setModalLocActive}>
              {currLoc ? <CurrentLocation location={location} setLocation={setLocation}  setActive={setModalLocActive} setCurrLoc={ setCurrLoc} /> :
               <ModalLocations location={location} setLocation={setLocation} setActive={setModalLocActive} setCurrLoc={ setCurrLoc}/>}
    </Modal>
    { url === 'http://localhost:3000/order'? 
          <OrderHeader />:
            <Header location={location} setLocation={setLocation} active2={modalRegActive} setActive2={setRegModalActive}  active={modalLocActive} setActive={setModalLocActive} />}
      <Routes>
        <Route index element={
        <>
          <Welcome active={modalLocActive} location={location} setLocation={setLocation} setActive={setModalLocActive} />
          <Restaurants />
          <Delivery />
        </>}/>
        <Route path="/restaurants"> 
          <Route index  element={<IndexRestaurants />} />
          <Route path=":id" element={<ARest />}/>
        </Route>
        <Route path="order" element={<Order />} />
        <Route path="*" element={ <h1>Page Not Found</h1> }/>
      </Routes>
    </>
  );
}

export default App;
