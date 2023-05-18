import { createSlice } from '@reduxjs/toolkit';

const myCardsSlice = createSlice({
  name: 'myCards',
  initialState: {
    myCards: [
      {
        id: 1,
        firstName: 'RUSLANA',
        secondName: 'HUDZOVSKA',
        cardNumber: '1111 2222 3333 4444',
        bank: 'Privat',
        typePaymentSystem: './images/1.png',
        typeCard: 'black',
        availableSum: 20000,
        endDate: '12/26',
      },
      {
        id: 2,
        firstName: 'RUSLANA',
        secondName: 'HUDZOVSKA',
        cardNumber: '1111 2222 3333 5555',
        bank: 'Privat',
        typePaymentSystem: './images/2.png',
        typeCard: 'gold',
        availableSum: 30000,
        endDate: '12/27',
      },
      {
        id: 3,
        firstName: 'RUSLANA',
        secondName: 'HUDZOVSKA',
        cardNumber: '1111 2222 3333 6666',
        bank: 'Privat',
        typePaymentSystem: './images/1.png',
        typeCard: 'silver',
        availableSum: 50000,
        endDate: '12/27',
      },
    ],
  },
  reducers: {
    changeBalanceMyCard(state, action) {
      state.myCards.map((card) => {
        if (card.availableSum === action.payload.sum) {
          return (card.availableSum =
            card.availableSum - action.payload.transferSum);
        }
        return card;
      });
    },
    addCard(state, action) {
        console.log(action.payload.card)
      state.myCards.push(action.payload.card);
    },
    delCard(state, action) {
      
      state.myCards = state.myCards.filter(
        (card) => card.cardNumber !== action.payload.cardNumberDel
      );
    },
    editCard(state, action) {},
  },
});

export const { changeBalanceMyCard, addCard, delCard, editCard } =
  myCardsSlice.actions;
export default myCardsSlice.reducer;
