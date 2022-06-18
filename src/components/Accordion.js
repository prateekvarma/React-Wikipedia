import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = props.items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">{item.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
