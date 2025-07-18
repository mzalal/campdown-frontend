import classes from "./Input.module.css";

function Input({ type, placeholder, id, children }) {
    return (
        <div className={classes.input}>
            <input type={type || "text"} id={id} placeholder={placeholder} />
            <label htmlFor={id}>{children}</label>
        </div>
    );
}

export default Input;
