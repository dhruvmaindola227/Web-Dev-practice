import React, { useState } from "react";


const RegisterForm = () => {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <button>Add number</button>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
          }}
        ></input>
        <button>Remove Number</button>
        <button>Add number</button>
      </div>
      <div>
        <ul>
          <li>
            asd
          </li>
        </ul>
      </div>
    </>
  );
};
export default RegisterForm;
