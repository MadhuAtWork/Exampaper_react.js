import React from 'react';

const Modal = ({ results, data }) => {
  return(
    <div className="modal">
      <div className="modal-card">
       <h1>your answers</h1>
        <section >
          <ul>
            {results.map((result, i) => (
              <li key={i} className="dataAnswer">
                <p><strong>{result.q}</strong></p>
                <p className={result.a === data[i].answer ? 'success ' : 'danger '}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p className="success">Correct answer: {data[i].answer}</p>}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Modal;