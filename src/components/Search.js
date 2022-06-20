import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  //Testing useEffect() : Below, the console will be called every time the input field is typed, hence the component will be rendered every time, and therefore the console will be logged each time.
  console.log("Called every time you type.");

  //Below the useEffect has an empty [] as 2nd param, so it will render only once
  useEffect(() => {
    console.log("Just called on initialization");
  }, []);

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
