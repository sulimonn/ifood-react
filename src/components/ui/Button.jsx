import './Button.css'
import React from "react";
const Button = ({title, setActive}) => {
  return (
    <>
      <div className="button">
          <button onClick={() => setActive(true)} className="btn">{title}</button>
      </div>
    </>
  )

}

export default Button