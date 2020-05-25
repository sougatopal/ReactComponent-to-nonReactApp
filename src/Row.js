import React from "react";
import Cell from "./Cell";

export default class DataTable extends React.Component{
    
    render(){
        const {row,header,rowIndex} = this.props;
        return(
            <tr>
            {row.map((cell,cellIndex)=>{
            return (<Cell cell={cell} header={header} key={`${rowIndex}-${cellIndex}`}/>)
            })}
            </tr>
        )
    }
}