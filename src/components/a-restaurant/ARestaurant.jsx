import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from './filter/Filter.jsx';
import MenuCard from './MenuCard.jsx';
import Corf from './Corf.jsx';
import './menu.css';
const ARestaurant = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [corf, addCorf] = useState('');
  const [filt, setFilt] = useState('');
  const [isNull, setNull] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:8888/restaurants', {
        params: {
          id: id,
        },
      })
      .then((res) => {
        if (res.data.length !== 0) {
          setData(res.data);
          setTitle(res.data[0].title);
          setNull(false);
        }
      });
  }, []);

  return (
    <div className="restauran">
      <div className="arest">
        <div className="arest_header">
          <h1>{title}</h1>
        </div>
        <div className="a_rest__container">
          <Filter setFilt={setFilt} />
          <div className="menu">
            {isNull ? (
              <h1>Пусто</h1>
            ) : filt === '' ? (
              data.map((item, index) => {
                return (
                  <MenuCard key={index} data={item} filt={filt} addCorf={addCorf} corf={corf} />
                );
              })
            ) : (
              data
                .filter((val) => {
                  return val.cat_id === filt;
                })
                .map((item, index) => {
                  return (
                    <MenuCard key={index} data={item} filt={filt} addCorf={addCorf} corf={corf} />
                  );
                })
            )}
          </div>
        </div>
      </div>
      <div className="corf">
        <Corf addCorf={addCorf} corf={corf} />
      </div>
    </div>
  );
};

export default ARestaurant;
