import React from 'react'
import './acmodal.css'
const AccModal = ({ active, setActive, children, user}) => {


  return (
    <div id='accModal' className={active ? 'accmodal a-active' : 'accmodal'} onClick={() => setActive(false)}>
        <div className={user === 'order' ? ' orderis accmodal-content' : '' + user === 'acc' ? ' isAcc accmodal-content' : '' + active ? '' : 'nn-active '
    } onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default AccModal
