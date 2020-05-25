import React from "react";
import Row from "./Row"


export default class DataTable extends React.Component{
    render(){
        const {rows,headings} = this.props;
        return(
            <table>
                <thead>
                <Row row={headings} header={true}/>
                    
                </thead>
                <tbody>
                {rows.map((row,rowIndex)=>{
                    return(
                        <Row row={row} key={rowIndex} rowIndex={rowIndex}/>
                    )
                })}
                </tbody>
                
            </table>
        )
    }
} 