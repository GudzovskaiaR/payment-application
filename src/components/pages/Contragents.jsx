import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../styles/Contragents.css';
import Contragent from './Conragent';

import { delCard } from '../../store/contragentsSlice';

const Contragents = ({ contragents }) => {
  const [cardNumber, setCardNumber] = useState();
  const dispatch = useDispatch();

  const delChooseCard = () => {
    dispatch(delCard({ cardNumber }));
    setCardNumber('');
  };
  return (
    <div className="container-contragents">
      <div className="name-page">
        <div className="name-page-header">
          <h1>Contragents</h1>
        </div>
        <Link to="/">
          <div className="backHome">
            <img src="./images/home-page.png" alt="" />
          </div>
        </Link>
      </div>
      <div className="content-contragents">
        <div className="list-contragents">
          {contragents.map((contragent) => (
            <div key={contragent.id} className="item-listContragents">
              <input
                id={contragent.id}
                type="radio"
                name="ca"
                onChange={(e) => {
                  setCardNumber(contragent.cardNumberContragent);
                }}
              />
              <label htmlFor={contragent.id}>
                {' '}
                <Contragent
                  key={contragent.id}
                  firstName={contragent.firstName}
                  secondName={contragent.secondName}
                  cardNumberContragent={contragent.cardNumberContragent}
                  balance={contragent.balance}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="btn-myCards">
          <div className="btn-add">
            <Link to="/contragents/addcontragent">
              {' '}
              <button>add</button>
            </Link>
          </div>

          {cardNumber ? (
            <>
              {' '}
              <div className="btn-delete">
                <button onClick={() => delChooseCard()}>delete</button>
              </div>
              <div className="btn-edit">
                {' '}
                <Link to={`/contragents/editcontragent/${cardNumber}`}>
                  <button>edit</button>
                </Link>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
export default Contragents;
