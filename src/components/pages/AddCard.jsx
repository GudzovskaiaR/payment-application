import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCard } from '../../store/myCardsSlice';
import '../../styles/AddCard.css';
const AddCard = ({ myCards }) => {
  const [card, setCard] = useState({
    firstName: 'RUSLANA',
    secondName: 'HUDZOVSKA',
    cardNumber: '',
    bank: '',
    availableSum: '',
    endDate: '',
  });

  const dispatch = useDispatch();
  const addNewCard = (event) => {
    event.preventDefault();

    dispatch(addCard({ card }));
  };

  return (
    <div className="container-addCard">
      <div className="name-page">
        <div className="name-page-header">
          <h1>New card</h1>
        </div>
        <Link to="/">
          <div className="backHome">
            <img src="../../images/home-page.png" alt="" />
            
          </div>
        </Link>
      </div>
      <form onSubmit={addNewCard}>
        <div>
          <p>
            Введіть номер нової карти (номер повинен бути довжино 16 та містити
            тільки цифри)
          </p>
          <input
            className="formInput"
            placeholder="Enter number new card, number must have 16"
            value={card.cardNumber}
            onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
            maxLength={16}
          />
        </div>
        <div>
          <p>Введіть назву банку</p>
          <input className="formInput" placeholder="Enter bank" />
        </div>

        <div className="chooseTypePaymenSystemCard">
          <p>Виберіть платіжну систему карти</p>
          <div className="container-btnChooseSystem">
            <input
              type="radio"
              name="paymentSystem"
              value="./images/1.png"
              onChange={(e) =>
                setCard({ ...card, typePaymentSystem: e.target.value })
              }
            />{' '}
            <label>MasterCard</label>
            <input
              type="radio"
              name="paymentSystem"
              value="./images/2.png"
              onChange={(e) =>
                setCard({ ...card, typePaymentSystem: e.target.value })
              }
            />{' '}
            <label>Visa</label>
          </div>
        </div>
        <div className="chooseTypeCard">
          <p>Виберіть вид карти</p>
          <div className="container-btnChooseTypeCard">
            {' '}
            <input
              type="radio"
              name="typeCard"
              value="silver"
              onChange={(e) => setCard({ ...card, typeCard: e.target.value })}
            />{' '}
            <label>Silver</label>
            <input
              type="radio"
              name="typeCard"
              value="gold"
              onChange={(e) => setCard({ ...card, typeCard: e.target.value })}
            />{' '}
            <label>Gold</label>
            <input
              type="radio"
              name="typeCard"
              value="black"
              onChange={(e) => setCard({ ...card, typeCard: e.target.value })}
            />{' '}
            <label>Black</label>
          </div>
        </div>
        <div>
          <p>Введіть доступну суму</p>
          <input
            className="formInput"
            placeholder="Enter sum"
            value={card.availableSum}
            onChange={(e) => setCard({ ...card, availableSum: e.target.value })}
          />
        </div>
        <div>
          <p>Введіть термін дії карти в форматі ММ/РР</p>
          <input
            className="formInput"
            placeholder="Enter end date"
            value={card.endDate}
            onChange={(e) => setCard({ ...card, endDate: e.target.value })}
          />
        </div>
        <button className="btn-addCard">Add new card</button>
      </form>
    </div>
  );
};

export default AddCard;
