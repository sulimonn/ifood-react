import React, { useEffect, useState } from 'react';
import './SideBar.css';
import Axios from 'axios';
const SideBar = ({ setFilt, isNull }) => {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:8888/filters').then((res) => {
      setFilter(res.data);
    });
  }, []);
  return (
    <div className="sidebar">
      <h1>Фильтры</h1>
      {isNull ? (
        <></>
      ) : (
        filter.map((val) => {
          return (
            <div
              key={val.cat_id}
              onClick={() => {
                setFilt(val.cat_id);
              }}>
              {val.cat_title.toUpperCase()}
            </div>
          );
        })
      )}
    </div>
  );
};

export default SideBar;
