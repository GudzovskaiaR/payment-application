import { createSlice } from '@reduxjs/toolkit';

const contragentsSlice = createSlice({
  name: 'contragents',
  initialState: {
    contragents: [
      {
        firstName: 'Olga',
        secondName: 'Drozdenko',
        cardNumberContragent: '2223 2222 3333 6123',
        balance: 0,
      },
      {
        firstName: 'Olena',
        secondName: 'Savilova',
        cardNumberContragent: '0423 7922 3011 8123',
        balance: 0,
      },
      {
        firstName: 'Volodymyr',
        secondName: 'Denysenko',
        cardNumberContragent: '0423 7922 3011 6100',
        balance: 0,
      },
      {
        firstName: 'Iryna',
        secondName: 'Vasylenko',
        cardNumberContragent: '7823 0022 3049 0054',
        balance: 0,
      },
    ],
  },
  reducers: {
    changeSum(state, action) {
      state.contragents.map((contragent) => {
        console.log(action.payload.cardNumberContragent);
        if (
          contragent.cardNumberContragent ===
          action.payload.cardNumberContragent
        ) {
          return (contragent.balance = contragent.balance + Number(action.payload.transferSum));
        }
        return contragent;
      });
    },
  },
});

export const { changeSum } = contragentsSlice.actions;
export default contragentsSlice.reducer;
