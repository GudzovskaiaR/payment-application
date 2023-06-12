import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import './styles/MyCards.css';
import MyCards from './components/pages/MyCards';
import Home from './components/pages/Home';
import Contragents from './components/pages/Contragents';
import AddCard from './components/pages/AddCard';
import InfoMyCard from './components/pages/InfoMyCard';
import EditCard from './components/pages/EditCard';
import History from './components/pages/History';
import AddContragent from './components/pages/AddContragents';
import EditContragent from './components/pages/EditContragents';
function App() {
  const myCards = useSelector((state) => state.myCards.myCards);
  const contragents = useSelector((state) => state.contragents.contragents);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home myCards={myCards} contragents={contragents} />}
      />
      <Route path="/history" element={<History />} />
      <Route path="/:mycard" element={<MyCards myCards={myCards} />} />
      <Route
        path="/contragents"
        element={<Contragents contragents={contragents} />}
      />
      <Route path="/:mycard/addCard" element={<AddCard myCards={myCards} />} />
      <Route
        path="/:mycard/:numbercard"
        element={<EditCard myCards={myCards} />}
      />
      <Route
        path="/:mycard/infomycard/:numbercard"
        element={<InfoMyCard myCards={myCards} />}
      />

      <Route path="/contragents/addcontragent" element={<AddContragent />} />
      <Route
        path="/contragents/editcontragent/:cardnumber"
        element={<EditContragent contragents={contragents} />}
      />
    </Routes>
  );
}

export default App;
