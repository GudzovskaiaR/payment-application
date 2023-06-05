import { createSlice } from '@reduxjs/toolkit';
import contragentsCards from '../components/data/conteragentsCards';

const contragentsSlice = createSlice({
  name: 'contragents',
  initialState: {
    contragents: contragentsCards,
  },
  reducers: {
    changeSum(state, action) {
      state.contragents.map((contragent) => {
        if (
          contragent.cardNumberContragent ===
          action.payload.cardNumberContragent
        ) {
          return (contragent.balance =
            contragent.balance + Number(action.payload.transferSum));
        }
        return contragent;
      });
    },
    addCard(state, action) {
      state.contragents.push(action.payload.card);
    },
    delCard(state, action) {
      state.contragents = state.contragents.filter(
        (card) => card.cardNumberContragent !== action.payload.cardNumber
      );
    },
    editCard(state, action) {
      state.contragents = state.contragents.map((item) => {
        if (item.cardNumberContragent === action.payload.numbercard) {
          return action.payload.card;
        }
        return item;
      });
    },
  },
});

export const { changeSum, addCard, delCard, editCard } =
  contragentsSlice.actions;
export default contragentsSlice.reducer;
