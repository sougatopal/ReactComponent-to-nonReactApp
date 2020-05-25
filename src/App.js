import React from "react";
import DataTable from './DataTable';

//import "./styles.css";


export default function App(props) {
  return (
    <div className="App">
      <h1>Data Table</h1>
      
      <DataTable rows={props.rows} headings={props.headings}/>

    </div>
  );
}
