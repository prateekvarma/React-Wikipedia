import React, { useEffect } from "react";

const Convert = (props) => {
  useEffect(() => {
    console.log("useEffect func triggered!");
  }, [props.language, props.text]);

  return <div>Convert</div>;
};

export default Convert;
