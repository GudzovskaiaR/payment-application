import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { editCard } from '../../store/myCardsSlice';
import { Link } from 'react-router-dom';

const EditCard = ({ myCards }) => {
  const { numbercard } = useParams();
  const myCard = myCards.filter((item) => item.cardNumber === numbercard)[0];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      id: myCard.id,
      firstName: 'RUSLANA',
      secondName: 'HUDZOVSKA',
      cardNumber: myCard.cardNumber,
      bank: myCard.bank,
      typePaymentSystem: myCard.typePaymentSystem,
      typeCard: myCard.typeCard,
      availableSum: myCard.availableSum,
      endDate: myCard.endDate,
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const formSubmit = (card) => {
    
    dispatch(editCard({ card }));
    navigate('/:mycard');
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
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <p>
            Оновіть номер карти {numbercard}(номер повинен бути довжино 16 та
            містити тільки цифри)
          </p>
          <input
            type="number"
            className="formInput"
            placeholder=""
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
          {errors.cardNumber && <p>{errors.cardNumber?.message}</p>}
        </div>
        <div>
          <p>Оновіть назву банку</p>
          <input
            className="formInput"
            placeholder=""
            {...register('bank', {
              required: 'is required',
            })}
          />
          {errors.bank && <p>{errors.bank?.message}</p>}
        </div>

        <div className="chooseTypePaymenSystemCard">
          <p>Оновіть платіжну систему карти</p>
          <div className="container-btnChooseSystem">
            <select
              {...register('typePaymentSystem', {
                required: 'is required',
              })}
            >
              <option value="./images/1.png">MasterCard</option>
              <option value="./images/2.png">Visa</option>
            </select>
          </div>
          {errors.typePaymentSystem && (
            <p>{errors.typePaymentSystem?.message}</p>
          )}
        </div>
        <div className="chooseTypeCard">
          <p>Оновіть вид карти</p>
          <select
            {...register('typeCard', {
              required: 'is required',
            })}
          >
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="black">Black</option>
          </select>
        </div>
        {errors.typeCard && <p>{errors.typeCard?.message}</p>}
        <div>
          <p>Оновіть доступну суму</p>
          <input
            className="formInput"
            placeholder="Enter sum"
            {...register('availableSum', {
              required: 'is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'required only number',
              },
            })}
          />
        </div>
        {errors.availableSum && <p>{errors.availableSum?.message}</p>}
        <div>
          <p>Оновіть термін дії карти в форматі ММ/РР</p>
          <input
            className="formInput"
            placeholder="Enter end date"
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
        <button className="btn-addCard">Edit card</button>
      </form>
    </div>
  );
};

export default EditCard;
