import React from 'react'
import Account from './logged/Account'
import Orders from './logged/Orders'
import './logged.css'

const Logged = () => {
  return (
    <div className='logged'>
      <Account />
      <Orders />
    </div>
  )
}

export default Logged