import React from "react";

export default function Cell({cell,header}){
    return(
        header ? <th>{cell}</th> : <td>{cell}</td>
    )

}