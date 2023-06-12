import './ContentRest.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cards from './Cards';
const ContentRest = ({ filt, setNull }) => {
  const [restId, setRestId] = useState('');
  const [rest, setRest] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:8888/restaurants').then((res) => {
      setRest(res.data);
      console.log(rest);
    });
  }, []);

  return (
    <div className="contentrest">
      <h1>Рестораны и кафе нашего города</h1>
      <div className="content_rest_img">
        {rest.length !== 0 ? (
          filt === '' ? (
            rest.map((val) => {
              setNull(false);
              return <Cards key={val.id} data={val} src={val.path} setRestId={setRestId} />;
            })
          ) : (
            rest
              .filter((val) => {
                const cat = val.cat_id;
                return +cat === +filt;
              })
              .map((val) => {
                return <Cards data={val} src={val.path} setRestId={setRestId} />;
              })
          )
        ) : (
          <h1> {setNull(true)}Пусто</h1>
        )}
      </div>
    </div>
  );
};

export default ContentRest;
