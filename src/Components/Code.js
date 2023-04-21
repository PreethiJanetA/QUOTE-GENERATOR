import React, { useState } from "react";
import axios from "axios";

const Code = () => {
  const [qoute, setQuote] = useState("It's me");
  const handleQuote = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    setQuote(res.data.content);
  };
  return (
    <div className="box">
      <i className="fas fa-quote-left fa2"></i>
      <div className="text">
        <i className="fas fa-quote-right fa1"></i>
        <div>
          <h3>Quote of the day</h3>
          <p classname="pi">{qoute}</p>
          <button onClick={handleQuote}>GENERATE QUOTES</button>
        </div>
      </div>
    </div>
  );
};
export default Code;
