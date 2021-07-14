import classes from './Input.module.css'
import React from "react";

const Input = (props) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id} className={classes}>{props.label}</label>
        <input{...props.input}/>
    </div>
}

export default Input;