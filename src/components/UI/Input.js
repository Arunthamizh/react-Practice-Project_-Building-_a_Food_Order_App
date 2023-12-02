import React from "react";
import classes from "./Input.module.css";
// ! React.forwardRef() => this means now the component function is argument to React.forwardRef()
// !  this means now the component function is argument to React.forwardRef()
// ! Now we get that ref as second argument to the component function and we forward it to the input element
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* // ! This is the shorthand for setting a props for an input element */}
      {/* {...props.input}
                This is the shorthand for setting a props for an input element
                instead of this: type={props.input.type} id={props.input.id} value={props.input.value} 
            */}
    </div>
  );
});

export default Input;
