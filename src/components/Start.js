import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
        <div className="content">
          <h1>Start the Exam</h1>
          <button className="button start" onClick={onQuizStart}>Start</button>
        </div>
    </div>
  );
}

export default Start;
