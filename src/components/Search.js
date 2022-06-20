import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  //Testing useEffect() : Below, the console will be called every time the input field is typed, hence the component will be rendered every time, and therefore the console will be logged each time.
  console.log("Called every time you component renders");

  //Below the useEffect has no 2nd params, so it will render at every re-render
  useEffect(() => {
    console.log("Called at initial render, and EVERY single re-render");
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term: </label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
