import React from 'react'

const BillIn = ({id, value, onChange}) => {
    return (
      <>
        <h1>Bill</h1>
        <label htmlFor={id}>
          <input value={value} onChange ={onChange} className={id} id={id} type="number" />
        </label>
      </>
    );
  };

export default BillIn