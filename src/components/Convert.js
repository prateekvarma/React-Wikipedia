import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = (props) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: props.text,
            target: props.language.value,
            key: "XXX",
          },
        }
      );
      setTranslated(res.data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [props.language, props.text]);

  return <div>{translated}</div>;
};

export default Convert;
