import { createSlice } from '@reduxjs/toolkit';
import myCards from '../components/data/myCardsData';
const myCardsSlice = createSlice({
  name: 'myCards',
  initialState: {
    myCards: myCards
  },
  reducers: {
    changeBalanceMyCard(state, action) {
      state.myCards.map((card) => {
        if (card.cardNumber === action.payload.number) {
          return (card.availableSum =
            card.availableSum - action.payload.transferSum);
        }
        return card;
      });
    },
    addCard(state, action) {
      state.myCards.push(action.payload.card);
    },
    delCard(state, action) {
      
      state.myCards = state.myCards.filter(
        (card) => card.cardNumber !== action.payload.cardNumberDel
      );
    },
    editCard(state, action) {
      state.myCards = state.myCards.map((item) => {
        if (item.cardNumber === action.payload.numbercard) {
          
          return action.payload.card;
        }
        return item;
      });
    },
  },
});

export const { changeBalanceMyCard, addCard, delCard, editCard } =
  myCardsSlice.actions;
export default myCardsSlice.reducer;
