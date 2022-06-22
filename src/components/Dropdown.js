import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //Below,the useEffect is configured to run only on initialization, but it will still execute on each click, bcoz it's expected behavior for addEventListener to continue.
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (ref.current.contains(event.target)) {
        //if dropdown is clicked, do not execute setOpen()
        return;
      }
      //Below, setting state var as false, because with this, the dropdown will now close when any part of the 'body' is clicked
      setOpen(false);
    });
  }, []);

  const renderedOptions = props.options.map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => props.onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
