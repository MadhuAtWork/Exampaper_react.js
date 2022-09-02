import React, { useState, useEffect, useRef } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, 
    activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);


  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  


  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }



  const backClickHandler = (e) => {
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions + 1) {
      onSetActiveQuestion(activeQuestion - 1);
    }
  }

  return(
    <>
    <div className="card">
        <div className="content">
          <h2 >{data.question}</h2>
          <hr></hr>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className="danger">{error}</div>}
        
        </div>
        <hr></hr>
        <div className="btndiv">
          <button className="button back" onClick={backClickHandler}>back</button>
          <button className="button next" onClick={nextClickHandler}>Next</button>
          </div>
      </div>
     
    </>
  );
}

export default Question;