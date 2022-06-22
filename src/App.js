import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: 'What is React',
    content: 'React is a front end library'
  },
  {
    title: 'Why use React',
    content: 'React is a favorite amongst JS engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'The color Blue',
    value: 'blue'
  }
]

 const App = () => {
  return (
    <div>
      <Dropdown options={options} />
      <Search />
      <Accordion items={items} />
    </div>
  );
};

export default App;