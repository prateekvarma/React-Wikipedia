import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming"); //initializing with a value, otherwise gives error
  const [results, setResults] = useState([]);

  //Below the useEffect has state var as 2nd param, so it will render at initial render + every (re-render + data change) together
  useEffect(() => {
    const search = async () => {
      //Below, {data} is object destructuring
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term) { //this will remove an error, then the input field is backspaced to blank.
      search();
    }
  }, [term]);
  //Wikipedia API format: https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
