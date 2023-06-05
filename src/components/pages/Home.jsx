import '../../styles/Home.css';
import '../../styles/Card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { changeBalanceMyCard } from '../../store/myCardsSlice';
import { changeSum } from '../../store/contragentsSlice';
// import ListMyCard from '../ListMyCard';
import Card from './Card';
import Contragent from './Conragent';

const Home = ({ myCards, contragents }) => {
  const [myCardForPayment, setMyCardForPayment] = useState({
    number: '',
    sum: '',
  });
  const [cardNumberContragent, setCardNumberContragent] = useState('');
  const [validationPayment, setValidationPayment] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {}, mode: 'onChange' });
  const dispatch = useDispatch();
  const formSubmit = (data) => {
    const number = myCardForPayment.number;
    const transferSum = data.transferSum;
    if (!cardNumberContragent) {
      return setValidationPayment('Choose CA for payment');
    }

    dispatch(changeBalanceMyCard({ transferSum, number }));
    dispatch(changeSum({ transferSum, cardNumberContragent }));
    setMyCardForPayment({
      ...myCardForPayment,
      sum: myCardForPayment.sum - transferSum,
    });
    reset();
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
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="info-pay">
          <div className="input-pay">
            <input
              type="number"
              placeholder="Enter your sum"
              {...register('transferSum', {
                required: 'Enter sum for transfer',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'You have to enter only number',
                },
                min: {
                  value: 1,
                  message: 'the transfer amount must be greater than 0',
                },
                max: {
                  value: myCardForPayment.sum
                    ? myCardForPayment.sum
                    : -Infinity,
                  message: myCardForPayment.sum
                    ? 'There are not enough funds in the account'
                    : 'Please select a card for transfer',
                },
              })}
            ></input>
            {errors.transferSum && <p>{errors.transferSum?.message}</p>}
          </div>
          <div className="btn-pay">
            <button className="pay">Pay</button>
          </div>
        </div>

        <div className="numberPayCard">
          <p>
            Your payment card number: <span>{myCardForPayment.number}</span>
          </p>
        </div>
      </form>

      <div className="containerCA-btn">
        {contragents.map((contragent) => (
          <div key={contragent.id} className="item-listContragents">
            <input
              type="radio"
              id={contragent.id}
              name="ca"
              onChange={(e) => {
                setCardNumberContragent(contragent.cardNumberContragent);
                setValidationPayment('');
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
      <p>{validationPayment}</p>
      <div className="container-cards">
        {myCards.map((card) => (
          <div
            key={card.id}
            onClick={() =>
              setMyCardForPayment({
                number: card.cardNumber,
                sum: card.availableSum,
              })
            }
          >
            <label htmlFor={card.cardNumber}>
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
    </div>
  );
};
export default Home;
