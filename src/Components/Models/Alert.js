import React from "react";
import "./Modal.css";

const Alert = ({ message1, message2, setError }) => {
  return (
    <>
      <div className="alertModalContainer">
        <div className="alertModal">
          <h1>{message1}</h1>
          <p>{message2}</p>
          <button
            onClick={() => {
              setError(false);
            }}
            className="buttonStyles_btn"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;
