const Card = ({
  firstName,
  secondName,
  cardNumber,
  bank,
  typePaymentSystem,
  typeCard,
  availableSum,
  endDate,
  setMyCardForPayment
}) => {
  
 
  return (
    <div className={`card ${typeCard}` }  onClick={() => setMyCardForPayment({number: cardNumber, sum: availableSum})}>
      <div className="name-bank">
        <h1>{bank}</h1>
      </div>
      <div className="number-card">
        <p>{cardNumber}</p>
      </div>
      <div className="term">
        <p>{endDate}</p>
      </div>
      <div className="owner">
        {firstName} {secondName}
      </div>
      <div className="infoAboutCard">
        <div className="amount-card">
          <p>Your available amount: {availableSum} $</p>
        </div>
        <div className="img-card">
          <img src={typePaymentSystem} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Card;
