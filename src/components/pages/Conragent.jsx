import '../../styles/Contragent.css';
const Contragent = ({
  firstName,
  secondName,
  cardNumberContragent,
  balance,
}) => {
  return (
    <div className="container-contragent">
      <div>
        {' '}
        {firstName} {secondName}
      </div>
      <div> {cardNumberContragent}</div>
      <div>Transfer sum: {balance}</div>
      <div></div>
    </div>
  );
};

export default Contragent;
