import { useEffect, useState } from 'react';
import Transaction from './Transaction';
import '../../styles/History.css';
import { Link } from 'react-router-dom';
const History = () => {
  const [transactionData, setTransactionData] = useState();
  useEffect(() => {
    setTransactionData(JSON.parse(localStorage.getItem('transaction')));
  }, []);

  return (
    <div className="container-history">
      <div className="name-page-history">
        {' '}
        <div>
          <h1>History transaction</h1>
        </div>
        <Link to="/">
          <div className="backHome">
            <img src="./images/home-page.png" alt="" />
          </div>
        </Link>
      </div>
      <div className="container-transactions">
        {transactionData ? (
          transactionData.map((oneTransaction) => (
            <div className="container-transaction">
              <Transaction
                key={oneTransaction.date}
                oneTransaction={oneTransaction}
              />
            </div>
          ))
        ) : (
          <h1>You don`t have transaction</h1>
        )}
      </div>
    </div>
  );
};

export default History;
