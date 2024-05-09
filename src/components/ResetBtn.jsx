import React from 'react';

const ResetBtn = ({ onReset }) => {
  const handleReset = () => {
    onReset();
    document.getElementById("Custom-percentage-button").value = ""; // Restablecer el campo de porcentaje personalizado
  };

  return (
    <button type="button" className="reset-button" onClick={handleReset}>
      RESET
    </button>
  );
};

export default ResetBtn;