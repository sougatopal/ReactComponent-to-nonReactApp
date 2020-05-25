import App from "./src/App";
import ReactDOM from 'react-dom';
import React from 'react';

const dataTable = (element) => {
  ReactDOM.render(<App />,
    element);
};

module.exports = dataTable;