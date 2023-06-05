import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { editCard } from '../../store/myCardsSlice';
import { Link } from 'react-router-dom';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

const EditCard = ({ myCards }) => {
  const { numbercard } = useParams();
  const cardForEdit = myCards.filter(
    (item) => item.cardNumber === numbercard
  )[0];
  const [card, setCard] = useState(cardForEdit);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      id: card.id,
      firstName: 'RUSLANA',
      secondName: 'HUDZOVSKA',
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const formSubmit = (card) => {
    dispatch(editCard({ card }));
  };
  // const handlerEditCard = (event) => {
  //   event.preventDefault();

  //   dispatch(editCard({ card, numbercard }));
  // };

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
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <p>
            Оновіть номер карти {numbercard}(номер повинен бути довжино 16 та
            містити тільки цифри)
          </p>
          <input
            className="formInput"
            placeholder=""
            value={card.cardNumber}
            onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
            maxLength={16}
            {...register('cardNumber', {
              required: 'is required',
              maxLength: {
                value: 16,
                message: 'length must have 16',
              },
              pattern: {
                value: /^[0-9]+$/,
                message: 'required only number',
              },
            })}
          />
        </div>
        <div>
          <p>Оновіть назву банку</p>
          <input
            className="formInput"
            placeholder=""
            value={card.bank}
            onChange={(e) => setCard({ ...card, bank: e.target.value })}
          />
        </div>

        <div className="chooseTypePaymenSystemCard">
          <p>Оновіть платіжну систему карти</p>
          <div className="container-btnChooseSystem">
            <select
              value={card.typePaymentSystem}
              onChange={(e) =>
                setCard({ ...card, typePaymentSystem: e.target.value })
              }
            >
              <option value="./images/1.png">MasterCard</option>
              <option value="./images/2.png">Visa</option>
            </select>
          </div>
        </div>
        <div className="chooseTypeCard">
          <p>Оновіть вид карти</p>
          <select
            value={card.typeCard}
            onChange={(e) => setCard({ ...card, typeCard: e.target.value })}
          >
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="black">Black</option>
          </select>
        </div>
        <div>
          <p>Оновіть доступну суму</p>
          <input
            className="formInput"
            placeholder="Enter sum"
            value={card.availableSum}
            onChange={(e) => setCard({ ...card, availableSum: e.target.value })}
          />
        </div>
        <div>
          <p>Оновіть термін дії карти в форматі ММ/РР</p>
          <input
            className="formInput"
            placeholder="Enter end date"
            value={card.endDate}
            onChange={(e) => setCard({ ...card, endDate: e.target.value })}
          />
        </div>
        <button className="btn-addCard">Edit card</button>
      </form>
    </div>
  );
};

export default EditCard;
