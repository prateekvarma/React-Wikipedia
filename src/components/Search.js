import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  //Below the useEffect has state var as 2nd param, so it will render at initial render + every (re-render + data change) together 
  useEffect(() => {
    const search = async () => {
        await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                format: 'json',
                origin: '*',
                srsearch: term
            }
        })
    };
    search();
  }, [term]);
  //Wikipedia API format: https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming

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
