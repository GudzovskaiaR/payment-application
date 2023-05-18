import '../../styles/Contragent.css'
const Contragent = ({ firstName, secondName, cardNumberContragent, balance }) => {
  return (
    <div className="container-contragent">
      <p>
        {' '}
        {firstName} {secondName}: {cardNumberContragent}. Transfer sum: {balance}
      </p>
    </div>
  );
};

export default Contragent;
