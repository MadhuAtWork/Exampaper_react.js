import React from 'react';

const End = ({  onAnswersCheck }) => {
  return(
    <div className="card end">
        <div className="content">
          <h3>Your results</h3>
          <button className="submitbtn" onClick={onAnswersCheck}>submit and Check your answers</button>
        </div>
    </div>
  );
}

export default End;