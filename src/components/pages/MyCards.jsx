import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delCard } from '../../store/myCardsSlice';
import Card from './Card';
import { useState } from 'react';

const MyCards = ({ myCards }) => {
  const [cardNumberDel, setCardNumberDel] = useState('');
  const dispatch = useDispatch();
  const delChooseCard = () => {
    dispatch(delCard({ cardNumberDel }));
  };

  return (
    <div className="myCards">
      <div className="name-page">
        {' '}
        <div className="name-page-header">
          {' '}
          <h1>My cards</h1>
        </div>
        <Link to="/">
          <div className="backHome">
            <img src="./images/home-page.png" alt="" />
          </div>
        </Link>
      </div>

      <div className="container-myCards">
        <div className="listMyCards">
          {myCards.map((card) => (
            <div key={card.id}>
              <input
                id={card.id}
                type="radio"
                name="ca"
                onChange={(e) => setCardNumberDel(card.cardNumber)}
              />{' '}
              <label htmlFor={card.id}>
                <Card
                  key={card.id}
                  firstName={card.firstName}
                  secondName={card.secondName}
                  cardNumber={card.cardNumber}
                  bank={card.bank}
                  typePaymentSystem={card.typePaymentSystem}
                  typeCard={card.typeCard}
                  availableSum={card.availableSum}
                  endDate={card.endDate}
                />
              </label>
            </div>
          ))}
        </div>
        <div className="btn-myCards">
          <div className="btn-add">
            <Link to={`/${myCards[0].secondName}/addCard`}>
              <button>add</button>
            </Link>
          </div>
          {cardNumberDel ? (
            <>
              <div className="btn-delete">
                <button onClick={delChooseCard}>delete</button>
              </div>
              <div className="btn-edit">
                <Link to={`/${myCards[0].secondName}/${cardNumberDel}`}>
                  {' '}
                  <button>edit</button>
                </Link>
              </div>
              <div className="btn-info">
                <Link
                  to={`/${myCards[0].secondName}/infomycard/${cardNumberDel}`}
                >
                  {' '}
                  <button>info</button>
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
export default MyCards;
