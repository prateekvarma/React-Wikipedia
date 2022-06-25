import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = (props) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState('props.text');

  //Below this useEffect is just to apply a deboucned throttle of 500ms for the user to finish typing.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(props.text)
    }, 500);

    //If props.text changes before 500ms, the following cleanup function will run
    return () => {
      clearTimeout(timerId);
    }
  }, [props.text])

  useEffect(() => {
    const doTranslation = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: props.language.value,
            key: "XXX",
          },
        }
      );
      setTranslated(res.data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [props.language, debouncedText]);

  return <div>{translated}</div>;
};

export default Convert;
