import React from "react";
import { useSelector } from "react-redux";

const DisplayNumbers = () => {
  // ** (state) here is letting us access the entire store object that we have in the Store.js file.
  // ** Also allows us to access the all the slices present inside the store object.
  const data = useSelector((state) => {
    return state.numbers;
  });

  return (
    <div>
      {data.map((currNumber, index) => (
        <li key={index}>{currNumber}</li>
      ))}
    </div>
  );
};

export default DisplayNumbers;
