import '../../styles/InfoMyCard.css';
import { Link } from 'react-router-dom';
const InfoMyCard = () => {
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
      {/* <div className='infoAboutCard'> */}
      <p>Name of bank:</p>
      <p>Card number:</p>
      <p>Validity period of the card:</p>
      <p>Card holder:</p>
      <p>Available amount:</p>
      {/* </div> */}
    </div>
  );
};
export default InfoMyCard;
