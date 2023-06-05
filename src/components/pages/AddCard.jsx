import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { addCard } from '../../store/myCardsSlice';
import '../../styles/AddCard.css';
const AddCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: uuidv4(),
      firstName: 'RUSLANA',
      secondName: 'HUDZOVSKA',
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const formSubmit = (card) => {
    dispatch(addCard({ card }));
    reset({
      id: uuidv4(),
      firstName: 'RUSLANA',
      secondName: 'HUDZOVSKA',
    });
  };
  const errorsHandler = (data) => {};

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
      <form onSubmit={handleSubmit(formSubmit, errorsHandler)}>
        <div>
          <p>
            Введіть номер нової карти (номер повинен бути довжиною 16 та містити
            тільки цифри)
          </p>
          <input
            type="number"
            className="formInput"
            placeholder="Enter number new card, number must have 16"
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
          {errors.cardNumber && <p>{errors.cardNumber?.message}</p>}
        </div>
        <div>
          <p>Введіть назву банку</p>
          <input
            type="text"
            className="formInput"
            placeholder="Enter bank"
            {...register('bank', {
              required: 'is required',
            })}
          />
        </div>

        <div className="chooseTypePaymenSystemCard">
          <p>Виберіть платіжну систему карти</p>
          <div id="masterCard" className="container-btnChooseSystem">
            <input
              type="radio"
              name="paymentSystem"
              value="./images/1.png"
              {...register('typePaymentSystem', {
                required: 'is required',
              })}
            />{' '}
            <label id="visa" for="masterCard">
              MasterCard
            </label>
            <input
              type="radio"
              name="paymentSystem"
              value="./images/2.png"
              {...register('typePaymentSystem', {
                required: 'is required',
              })}
            />{' '}
            <label for="visa">Visa</label>
          </div>
          {errors.typePaymentSystem && (
            <p>{errors.typePaymentSystem?.message}</p>
          )}
        </div>
        <div className="chooseTypeCard">
          <p>Виберіть вид карти</p>
          <div className="container-btnChooseTypeCard">
            {' '}
            <input
              id="silverButton"
              type="radio"
              name="typeCard"
              value="silver"
              {...register('typeCard', {
                required: 'is required',
              })}
            />{' '}
            <label htmlFor="silverButton">Silver</label>
            <input
              id="goldButton"
              type="radio"
              name="typeCard"
              value="gold"
              {...register('typeCard', {
                required: 'is required',
              })}
            />{' '}
            <label htmlFor="goldButton">Gold</label>
            <input
              id="blackButton"
              type="radio"
              name="typeCard"
              value="black"
              {...register('typeCard', {
                required: 'is required',
              })}
            />{' '}
            <label htmlFor="blackButton">Black</label>
          </div>
          {errors.typeCard && <p>{errors.typeCard?.message}</p>}
        </div>
        <div>
          <p>Введіть доступну суму</p>
          <input
            type="number"
            className="formInput"
            placeholder="Enter sum"
            {...register('availableSum', { required: 'is required' })}
            // value={card.availableSum}
            // onChange={(e) => setCard({ ...card, availableSum: e.target.value })}
          />
          {errors.availableSum && <p>{errors.availableSum?.message}</p>}
        </div>
        <div>
          <p>Введіть термін дії карти в форматі ММ/РР</p>

          <input
            type="text"
            className="formInput"
            placeholder="Введіть термін дії карти"
            {...register('endDate', {
              required: 'is required',
              pattern: {
                value: /^([0-9]{2})\/([0-9]{2})$/,
                message: 'Введіть термін дії карти у форматі ММ/РР',
              },
            })}
          />
          {errors.endDate && <p>{errors.endDate.message}</p>}
        </div>

        <button className="btn-addCard">Add new card</button>
      </form>
    </div>
  );
};

export default AddCard;
