import React, { useEffect, useState } from 'react';
import AccModal from './accmodal/AccModal';
import user from '../../../UserData';
import axios from 'axios';
const Orders = () => {
  const [mActive, setmActive] = useState(false);
  const [orders, setOrders] = useState(false);

  document.addEventListener('click', function (e) {
    let target = e.target.id;

    if (target === 'order') {
      setmActive(true);
    } else setmActive(false);
  });
  useEffect(() => {
    axios
      .get('http://localhost:8888/getorder', {
        params: {
          user: user.id,
        },
      })
      .then((res) => {
        setOrders(res.data);
      });
  }, [mActive]);
  return (
    <div id="order" className="order" onClick={() => setmActive(!mActive)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </svg>
      {mActive ? (
        <AccModal setActive={setmActive} active={mActive} user={'order'}>
          <div className="order-order">
            <h2>Заказы</h2>
            <hr />
            {orders.map((val) => {
              return (
                <div className="order-item">
                  <div>
                    <h4>Ресторан: </h4> <p>{val.title}</p>
                  </div>
                  <div>
                    <h4>Дата: </h4> <p>{val.order_date}</p>
                  </div>
                  <div>
                    <h4>Сумма: </h4> <p>{val.amount} KGS</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AccModal>
      ) : null}
    </div>
  );
};

export default Orders;
