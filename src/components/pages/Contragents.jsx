import '../../styles/Contragents.css'
import Contragent from './Conragent';
import { Link } from 'react-router-dom';
const Contragents = ({ contragents }) => {
  return (
    <div className="container-contragents">
      <div className='name-page'>
        <div className='name-page-header'><h1>Contragents</h1></div>
        <Link to="/">
       <div className="backHome">
         <img src="./images/home-page.png" alt="" />
        </div>
       </Link>
      </div>
      
      <div className="list-contragents">
        <ul>
          {contragents.map((contragent) => (
            <li>
              <Contragent
                key={contragent.cardNumberContragent}
                firstName={contragent.firstName}
                secondName={contragent.secondName}
                cardNumberContragent={contragent.cardNumberContragent}
                balance={contragent.balance}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Contragents;
