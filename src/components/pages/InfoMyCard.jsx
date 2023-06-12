import { useParams } from 'react-router-dom';
import '../../styles/InfoMyCard.css';
import { Link } from 'react-router-dom';
const InfoMyCard = ({ myCards }) => {
  const { numbercard } = useParams();
  const mycard = myCards.filter((item) => item.cardNumber === numbercard)[0];

  return (
    <div className="container-infoMyCard">
      <div className="name-page">
        <div className="name-page-header">
          <h1>Сard information</h1>
        </div>
        <Link to="/">
          <div className="backHome">
            <img src="../../images/home-page.png" alt="" />
          </div>
        </Link>
      </div>
     
          <p>Name of bank: {mycard.bank}</p>
          <p>
            Card number: <span>{mycard.cardNumber.slice(0, 4)}</span>{' '}
            <span>{mycard.cardNumber.slice(4, 8)}</span>{' '}
            <span>{mycard.cardNumber.slice(8, 12)}</span>{' '}
            <span>{mycard.cardNumber.slice(12, 16)}</span>
          </p>
          <p>Validity period of the card: {mycard.endDate}</p>
          <p>
            Card holder: <span>{mycard.firstName}</span>{' '}
            <span>{mycard.secondName}</span>
          </p>
       
    
    </div>
  );
};
export default InfoMyCard;
