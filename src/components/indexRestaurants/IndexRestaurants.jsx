import React, { useState } from 'react';
import './IndexRestaurants.css';
import SideBar from './side/SideBar';
import ContentRest from './content/ContentRest';
const IndexRestaurants = () => {
  const [isNull, setNull] = useState(true);
  const [filt, setFilt] = useState('');
  return (
    <div className="indRest">
      <div className="indRest__container">
        <SideBar isNull={isNull} setFilt={setFilt} />
        <ContentRest setNull={setNull} filt={filt} />
      </div>
    </div>
  );
};

export default IndexRestaurants;
