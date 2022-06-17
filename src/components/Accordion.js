import React from "react";

const Accordion = (props) => {
  const renderedItems = props.items.map((item) => {
    return (
      <div key={item.title}>
        <div>{item.title}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;    
};

export default Accordion;
