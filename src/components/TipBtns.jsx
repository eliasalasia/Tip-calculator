import React from 'react'

const TipBtns = ({ percentage, setPercentage }) => {
    const ButtonList = [5, 10, 15, 25, 50];
  
    return (
      <ul>
        {ButtonList.map((button) => (
          <li key={button} id={`percentage-${button}`}>
            <button
              type="button"
              className={`percentage-button ${percentage === button ? 'active' : ''}`}
              value={button}
              onClick={() => setPercentage(button)}
            >
              {button}%
            </button>
          </li>
        ))}
        <li>
          <input
            type="number"
            placeholder="Custom"
            id="Custom-percentage-button"
            className="percentage-button"
            onChange={(e) => setPercentage(parseInt(e.target.value))}
          />
        </li>
      </ul>
    );
  };

export default TipBtns