import React, { useEffect, useState } from 'react';
import AccModal from './accmodal/AccModal.jsx';
import user from '../../../UserData.jsx';
import axios from 'axios';
const Account = () => {
  const [active, setActive] = useState('');
  const [userdata, setUser] = useState({});
  document.addEventListener('click', function (e) {
    let target = e.target.id;
    if (target === 'roo') {
      setActive(true);
    } else setActive(false);
  });
  useEffect(() => {
    axios
      .get('http://localhost:8888/authget', {
        params: {
          email: user.email,
        },
      })
      .then((res) => {
        setUser(res.data[0]);
      });
  }, [active]);
  return (
    <>
      <div id="roo" className="account" onClick={() => setActive(!active)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>
      {active ? (
        <AccModal setActive={setActive} active={active} user={'acc'}>
          <h2>Привет {user.name}</h2>
          <div className="user-content">
            <div className="user-data">
              <div className="user-item">
                <p className="user-label">Имя</p>
                <p className="user-da">{user.name}</p>
              </div>
              <div className="user-item">
                <p className="user-label">Почта</p>
                <p className="user-da">{userdata.email}</p>
              </div>
            </div>
            <div className="change">
              <p>Редактировать</p>
            </div>
          </div>
          <div className="user-content">
            <div className="user-data">
              <div className="user-item">
                <p className="user-label">Телефон</p>
                <p className="user-da">
                  {userdata.phone_number === null ? (
                    <a>Ваш номер телефона?</a>
                  ) : (
                    userdata.phone_number
                  )}
                </p>
              </div>
            </div>
            <div className="change">
              <p>Редактировать</p>
            </div>
          </div>
          <div className="user-content">
            <div className="user-data">
              <div className="user-item">
                <p className="user-label">Пароль</p>
                <p className="user-da">{userdata.pass}</p>
              </div>
            </div>
            <div className="change">
              <p>Редактировать</p>
            </div>
          </div>
          <div className="user-content">
            <div className="user-data">
              <div className="user-item">
                <p className="user-label">Способы оплаты</p>
                <p className="user-card">Добавить новую карту</p>
              </div>
            </div>
          </div>
        </AccModal>
      ) : null}
    </>
  );
};

export default Account;
