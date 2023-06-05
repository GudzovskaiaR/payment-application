import { v4 as uuidv4 } from 'uuid';

const myCards = [
    {
      id: uuidv4(),
      firstName: 'RUSLANA',
      secondName: 'HUDZOVSKA',
      cardNumber: '1111222233334444',
      bank: 'Privat',
      typePaymentSystem: './images/1.png',
      typeCard: 'black',
      availableSum: 20000,
      endDate: '12/26',
    },
    {
      id: uuidv4(),
      firstName: 'RUSLANA',
      secondName: 'HUDZOVSKA',
      cardNumber: '1111222233335555',
      bank: 'Privat',
      typePaymentSystem: './images/2.png',
      typeCard: 'gold',
      availableSum: 30000,
      endDate: '12/27',
    },
    {
      id: uuidv4(),
      firstName: 'RUSLANA',
      secondName: 'HUDZOVSKA',
      cardNumber: '1111222233336666',
      bank: 'Privat',
      typePaymentSystem: './images/1.png',
      typeCard: 'silver',
      availableSum: 50000,
      endDate: '12/27',
    },
  ]

  export default myCards