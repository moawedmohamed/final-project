import React, { useState, useReducer, useRef } from "react";

const USeReducer = () => {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const plusRef = useRef(false);

  const handleCounter = () => {
    if (!plusRef.current) {
      if (count1 > 10) {
        plusRef.current = true;
      } else {
        setCount(count1 + 1); // Increment by 1 directly
      }
    } else {
      console.log("You reached max clicks.");
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + action.payload;
      case DECREMENT:
        return state - action.payload;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  const amountRef = useRef();
  const [count1, setCount] = useState(0);

  return (
    <div>
      <button
        ref={amountRef}
        type="button"
        className="btn btn-danger"
        aria-label="Close"
        onClick={() => {
          handleCounter();
        }}
      >
        Plus
      </button>
      <br />
      <button type="button" className="btn btn-outline-primary">
        {count1}
      </button>

      <br />
      <br />

      <input type="text" ref={amountRef} />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          dispatch({ type: INCREMENT, payload: 2 });
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <button type="button" className="btn btn-outline-primary">
        {count}
      </button>
      <br />
      <br />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          dispatch({ type: DECREMENT, payload: 3 });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default USeReducer;
