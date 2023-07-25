import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav/Nav'
import NavFreteGratis from '../components/navFreteGratis/navFreteGratis'
import Cookies from "js-cookie";
import ResumeFinish from "../components/ResumeFinish/ResumeFinish";
import ConsultaCep from  '../components/ConsultaCep/consultaCep'
import Payment from '../components/Payment/Payment';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import './css/ProgressBar.css'
import './css/FinalizarCompra.css';
import {SiVerizon} from 'react-icons/si'

const FinalizarCompra = ({ onSubmit, onRemove }) => {
  const [cartItems, setCartItems] = useState([]);
  const [addressInfo, setAddressInfo] = useState();
  const [currentStep, setCurrentStep] = useState(0); // Iniciamos na etapa 0 (ConsultaCep)
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);

  const handleAddressChange = (data) => {
    setAddressInfo((prevState) => ({
      ...prevState,
      cep: data.cep,
      address: data.address,
      city: data.city,
      state: data.state,
      number: data.number,
      complemento: data.complemento,
    }));
  };

  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.size.price);
    });
    return total.toFixed(2);
  };

  useEffect(() => {
    const storedCartItems = Cookies.get('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      if (parsedCartItems.length > 0) {
        setCartItems(parsedCartItems);
      }
    }
  }, []);

  useEffect(() => {
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 });
  }, [cartItems]);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setCompletedSteps((prevCompleted) => {
      const updatedCompleted = [...prevCompleted];
      updatedCompleted[currentStep] = true;
      return updatedCompleted;
    });
  };
  

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setCompletedSteps((prevCompleted) => {
      const updatedCompleted = [...prevCompleted];
      updatedCompleted[currentStep - 1] = false; // Remove a marcação da etapa anterior como concluída
      return updatedCompleted;
    });
  };

  return (
    <div>
      <div className='navs'>
        <NavFreteGratis />
        <Nav />
      </div>
      <div className="progressBarContainer">
  <ProgressBar percent={(currentStep / 2) * 100}>
    <Step>
      {({ accomplished }) => (
        <div className={`step-indicator ${accomplished || completedSteps[0] ? 'accomplished' : ''}`}>
          {completedSteps[0] ? <SiVerizon/> : '1'}
        </div>
      )}
    </Step>
    <Step>
      {({ accomplished }) => (
        <div className={`step-indicator ${accomplished || completedSteps[1] ? 'accomplished' : ''}`}>
          {completedSteps[1] ? <SiVerizon/> : '2'}
        </div>
      )}
    </Step>
    <Step>
      {({ accomplished }) => (
        <div className={`step-indicator ${accomplished || completedSteps[2] ? 'accomplished' : ''}`}>
          {completedSteps[2] ? <SiVerizon/> : '3'}
        </div>
      )}
    </Step>
  </ProgressBar>
</div>

      <div className="containerFinish">
        {currentStep === 0 && (
          <div className="left">
            <ConsultaCep onSubmit={handleAddressChange} onNextStep={handleNextStep} />
          </div>
        )}
        {currentStep === 1 && (
          <div className="right">
           <ResumeFinish
            cartItems={cartItems}
            onRemove={onRemove}
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep} // Certifique-se de passar a função aqui
          />
          </div>
        )}
      </div>
      {currentStep === 2 && (
        <div className="payment">
          <Payment
            cartItems={cartItems}
            cep={addressInfo && addressInfo.cep}
            address={addressInfo && addressInfo.address}
            city={addressInfo && addressInfo.city}
            state={addressInfo && addressInfo.state}
            number={addressInfo && addressInfo.number}
            complemento={addressInfo && addressInfo.complemento}
            onSubmit={onSubmit}
            total={calcularTotal()}
            onPreviousStep={handlePreviousStep}
          />
        </div>
      )}
    </div>
  );
};

export default FinalizarCompra;





