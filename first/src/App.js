import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNumber } from './Store/Slices/NumberSlice'; 
import DisplayNumbers from '../src/Components/DisplayNumbers';

const RegisterForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addNewNumber = (number) => {
    dispatch(addNumber(number));
  };


  return (
    <>
      <div>
        <button
          onClick={() => {
            addNewNumber(Math.floor(Math.random() * 10));
          }}
        >
          Add number
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
          }}
        ></input>
        <button>Remove Number</button>
        <button>Remove All numbers</button>
      </div>
      <div>
        <ul>
          <DisplayNumbers/>
        </ul>
      </div>
    </>
  );
};
export default RegisterForm;
