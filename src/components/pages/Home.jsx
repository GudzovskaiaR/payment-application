import '../../styles/Home.css';
import '../../styles/Card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBalanceMyCard } from '../../store/myCardsSlice';
import { changeSum } from '../../store/contragentsSlice';
// import ListMyCard from '../ListMyCard';
import Card from './Card';
import Contragent from './Conragent';

const Home = ({ myCards, contragents }) => {
  const [transferSum, setTransferSum] = useState('');
  const [myCardForPayment, setMyCardForPayment] = useState({
    number: '',
    sum: '',
  });
  const [cardNumberContragent, setCardNumberContragent] = useState('');
  const dispatch = useDispatch();
  const makeTransfer = () => {
    if (transferSum > myCardForPayment.sum) {
      setTransferSum('Your card balance  isn`t enough to make transfer');
    } else {
      const sum = myCardForPayment.sum;
      dispatch(changeBalanceMyCard({ transferSum, sum }));
      dispatch(changeSum({transferSum, cardNumberContragent}))
      setTransferSum('');
    }
  };
  
  return (
    <div className="container-home">
      <div className="main-photo">
        <img src="./images/men.png" alt="" />
      </div>
      <div className="container-header">
        <h1>Payment application</h1>
      </div>

      <div className="btn_cards">
        <Link to={`/${myCards[0].secondName}`}>
          {' '}
          <button className="my-card">my card</button>
        </Link>
        <Link to="/contragents">
          <button className="ca-card">CA</button>
        </Link>
      </div>
      <div className="info-pay">
        <div className="input-pay">
          <input
            placeholder="Enter your sum"
            value={transferSum}
            onChange={(e) => setTransferSum(e.target.value)}
          ></input>
        </div>
        <div className="btn-pay">
          <button className="pay" onClick={() => makeTransfer()}>
            Pay
          </button>
        </div>
      </div>

      <div className="numberPayCard">
        <p>
          Your payment card number: <span>{myCardForPayment.number}</span>
        </p>
      </div>
      <div className="containerCA-btn">
        {contragents.map((contragent) => (
          <div className='item-listContragents'>
            <input
              
              type="radio"
              name="ca"
              onChange={(e) =>
                setCardNumberContragent(contragent.cardNumberContragent)
              }
            />
             <Contragent key={contragent.cardNumberContragen}
                firstName={contragent.firstName}
                secondName={contragent.secondName}
                cardNumberContragent={contragent.cardNumberContragent}
                balance={contragent.balance}
              />
          </div>
        ))}
      </div>
      <form></form>

      <div className="container-cards">
        {myCards.map((card) => (
          <Card key={card.cardNumber}
            firstName={card.firstName}
            secondName={card.secondName}
            cardNumber={card.cardNumber}
            bank={card.bank}
            typePaymentSystem={card.typePaymentSystem}
            typeCard={card.typeCard}
            availableSum={card.availableSum}
            endDate={card.endDate}
            setMyCardForPayment={setMyCardForPayment}
          />
        ))}
      </div>

      <div className="list-myCard">{/* <ListMyCard /> */}</div>
    </div>
  );
};
export default Home;
