

import classes from './Input.module.css';
const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
            {/* // ! This is the shorthand for setting a props for an input element */}
            {/* {...props.input}
                This is the shorthand for setting a props for an input element
                instead of this: type={props.input.type} id={props.input.id} value={props.input.value} 
            */}
        </div>
    );
}

export default Input;
