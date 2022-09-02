import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import End from './components/End';
import Modal from './components/Modal';
import Questiondata from './data/Questiondata.json';

let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const questionStartHandler = () => {
    setStep(2);
  }

 

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={questionStartHandler} />}
      {step === 2 && <Question
        data={Questiondata.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={Questiondata.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
        data={Questiondata.data}
        onAnswersCheck={() => setShowModal(true)}
      />}

      {showModal && <Modal
        results={answers}
        data={Questiondata.data}
      />}
    </div>
  );
}

export default App;

