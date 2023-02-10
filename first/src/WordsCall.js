import React, { useState } from "react";
import axios from "axios";

const WordsCall = () => {
  const [userData, setUserData] = useState(null);
  //userdata is a variable which can be changed using setUserData.
  const getWords = async () => {
    await axios.get("http://localhost:4444/wordsgame/getwords").then((res) => {
      console.log(JSON.parse(JSON.stringify(res["data"])));
      setUserData(JSON.parse(JSON.stringify(res["data"])));
      //whenever setUserData() is called. Component is getting rerendered hence might 
      //enter in an infinite recursive loop.
    });
    console.log("idhar aagaya ye pehle");
  };
  if (userData == null) {
    getWords();
  }

  return (
    <div>
      {userData == null ? (
        <div> Loading...</div>
      ) : (
        <div>
          {userData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordsCall;
