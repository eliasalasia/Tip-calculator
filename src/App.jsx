import React, { useState, useEffect } from 'react';
import BillIn from './components/BillIn';
import TipBtns from './components/TipBtns';
import PeopIn from './components/PeopIn';
import ResDisp from './components/ResDisp';
import ResetBtn from './components/ResetBtn';
import './index.css';

const App = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Función para calcular la propina y el total
  const calculateTipAndTotal = () => {
    const tip = (bill * percentage) / 100 / people;
    const total = (bill / people) + tip;
    setTipAmount(tip);
    setTotalAmount(total);
  };

  
  useEffect(() => {
    calculateTipAndTotal();
  }, [bill, people, percentage]);

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setPercentage(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <BillIn id={"BillIn"} value={bill} onChange={(e) => setBill(e.target.value)} />
          <TipBtns percentage={percentage} setPercentage={setPercentage} />
          <PeopIn people={people} setPeople={setPeople} />
        </div>
        <div className="result-wrapper">
          <ResDisp tipAmount={tipAmount} totalAmount={totalAmount} />
          <ResetBtn onReset={handleReset} />
        </div>
      </div>
    </>
  );
};

export default App;