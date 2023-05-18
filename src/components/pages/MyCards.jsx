import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delCard, addCard } from '../../store/myCardsSlice';
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
            <div>
              <input
                type="radio"
                name="ca"
                onChange={(e) => setCardNumberDel(card.cardNumber)}
              />
              <Card
                key={card.cardNumber}
                firstName={card.firstName}
                secondName={card.secondName}
                cardNumber={card.cardNumber}
                bank={card.bank}
                typePaymentSystem={card.typePaymentSystem}
                typeCard={card.typeCard}
                availableSum={card.availableSum}
                endDate={card.endDate}
              />
            </div>
          ))}
        </div>
        <div className="btn-myCards">
          <div className="btn-delete">
            <button onClick={delChooseCard}>delete</button>
          </div>

          <div className="btn-add">
            <Link to={`/${myCards[0].secondName}/addcard`}>
              <button>add</button>
            </Link>
          </div>

          <div className="btn-edit">
            <Link to="/editCard">
              {' '}
              <button>edit</button>
            </Link>
          </div>
          <div className="btn-info">
            <Link to="/infomycard">
              {' '}
              <button>info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyCards;
