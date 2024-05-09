import React from 'react'

const ResDisp = ({ tipAmount, totalAmount }) => {
  return (
    <div className="result-txt">
      <div className="text-amount">
        <div>
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>
        <h3>${tipAmount || 0}</h3>
      </div>
      <div className="total-amount">
        <div>
          <h2>Total</h2>
          <p>/ person</p>
        </div>
        <h3>${totalAmount || 0}</h3>
      </div>
    </div>
  );
};

export default ResDisp;