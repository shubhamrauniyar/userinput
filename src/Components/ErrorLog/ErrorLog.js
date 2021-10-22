import React from "react";
import styled from "./ErrorLog.module.css";

const ErrorLog=(props)=>
{
    
    const displaynone=!props.isInvalid && styled['display-none'];
return <div className={styled['error-log'] +" "+  displaynone}>
    <div className={styled[`error-log-heading`] }>
        <h1>Invalid Input</h1>
    </div>
    <h3>{props.dismsg}</h3>
    
    <button onClick={props.onButtonClick}>Close</button>
</div>

}

export default ErrorLog;