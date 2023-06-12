const Transaction = ({ oneTransaction }) => {
  const date = oneTransaction.date;
  const transferSum = oneTransaction.transferSum;
  const cardFrom = oneTransaction.cardFrom[0];
  const cardTo = oneTransaction.cardTo[0];
  return (
    <div>
      <p>{date}</p>
      <div>
        <h2>Transfer from</h2>
        <div>
          <span>{cardFrom.firstName}</span> <span>{cardFrom.secondName}</span>{' '}
          <span>card number: {cardFrom.cardNumber}</span>
        </div>
      </div>
      <div>
        <h2>Transfer to</h2>
        <div>
          <span>{cardTo.firstName}</span> <span>{cardTo.secondName}</span>{' '}
          <span>card number: {cardTo.cardNumberContragent}</span>
        </div>
        <p>Sum transfer: {transferSum}</p>
      </div>
    </div>
  );
};

export default Transaction;
