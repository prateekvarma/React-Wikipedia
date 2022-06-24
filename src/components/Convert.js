import React, { useEffect } from "react";
import axios from "axios";

const Convert = (props) => {
  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
            q: props.text,
            target: props.language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
    })
  }, [props.language, props.text]);

  return <div>Convert</div>;
};

export default Convert;
