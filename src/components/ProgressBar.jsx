
import React from 'react';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-bar">
      <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>Consulta CEP</div>
      <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>Resumo do Pedido</div>
      <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>Pagamento</div>
    </div>
  );
};

export default ProgressBar;
