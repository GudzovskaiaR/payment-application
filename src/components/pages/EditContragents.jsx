import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { editCard } from '../../store/contragentsSlice';
import { Link } from 'react-router-dom';

const EditContragent = ({ contragents }) => {
  const { cardnumber } = useParams();
  console.log(cardnumber);
  const { id, firstName, secondName, cardNumberContragent, balance } =
    contragents.filter((item) => item.cardNumberContragent === cardnumber)[0];
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      id: id,
      firstName: firstName,
      secondName: secondName,
      cardNumberContragent: cardNumberContragent,
      balance: balance,
    },
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formSubmit = (card) => {
    dispatch(editCard({ card }));
    navigate('/contragents');
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
          <p>Оновлення імені контрагента:</p>
          <input
            type="text"
            className="formInput"
            placeholder="Enter name"
            {...register('firstName', {
              required: 'is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'required only letters',
              },
            })}
          />
          {errors.firstName && <p>{errors.firstName?.message}</p>}
          <p>Онофлення прізвища контрагента:</p>
          <input
            type="text"
            className="formInput"
            placeholder="Enter surname"
            {...register('secondName', {
              required: 'is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'required only letters',
              },
            })}
          />
          {errors.secondName && <p>{errors.secondName?.message}</p>}
          <p>
            Оновлення номеру карти контрагента (номер повинен бути довжиною 16
            та містити тільки цифри)
          </p>
          <input
            type="number"
            className="formInput"
            placeholder="Enter number new card, number must have 16"
            {...register('cardNumberContragent', {
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
          {errors.cardNumberContragent && (
            <p>{errors.cardNumberContragent?.message}</p>
          )}
        </div>

        <button className="btn-addCard">Add new card</button>
      </form>
    </div>
  );
};

export default EditContragent;
