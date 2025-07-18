import { useState } from "react";
import classes from "./FilterOption.module.css";
import Icon from "../Icon/Icon.jsx";

function FilterOption({ icon, children }) {
    const [isChecked, setIsChecked] = useState(false);

    function handleChange() {
        setIsChecked((prev) => !prev);
    }

    return (
        <label
            htmlFor={children.toString().toLowerCase()}
            className={`${classes.filterOption} ${isChecked && classes.checked}`}
        >
            <Icon
                className={classes.icon}
                name={icon}
                style={isChecked && "solid"}
            />
            <input
                type="checkbox"
                id={children.toString().toLowerCase()}
                onChange={handleChange}
            />
            {children}
        </label>
    );
}

export default FilterOption;
