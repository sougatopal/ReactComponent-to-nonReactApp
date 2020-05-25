import App from "./src/App";
import ReactDOM from 'react-dom';
import React from 'react';

const dataTable = (element,headings,rows) => {
  
  ReactDOM.render(<App  headings={headings}rows ={rows} />,
    element);
};

module.exports = dataTable;