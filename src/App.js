import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React",
    content: "React is a front end library",
  },
  {
    title: "Why use React",
    content: "React is a favorite amongst JS engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]); //passing 1st object as default
  return (
    <div>
      <Translate />
      <Dropdown
        label="Select a color"
        selected={selected} //state variable as prop
        onSelectedChange={setSelected} // state setter as prop
        options={options}
      />
      <Search />
      <Accordion items={items} />
    </div>
  );
};

export default App;
