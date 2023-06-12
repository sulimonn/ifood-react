import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Filter = ({ setFilt }) => {
  const [filter, setFilter] = useState([{ id: '', title: '' }]);
  const { id } = useParams();
  const [isNull, setNull] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8888/food-filter', {
        params: {
          id: id,
        },
      })
      .then((res) => {
        if (res.data.length === 0) {
          setNull(false);
          setFilter(res.data);
        }
      });
  }, []);
  return (
    <div className="sidebar">
      <h2>Filter</h2>
      {isNull ? (
        <></>
      ) : (
        filter.map((val) => {
          return (
            <div
              key={val.id}
              onClick={() => {
                setFilt(val.id);
              }}>
              {val.title.toUpperCase()}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Filter;
