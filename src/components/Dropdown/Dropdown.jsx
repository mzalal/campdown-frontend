import classes from "./Dropdown.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Dropdown({ children, ...props }) {
    return (
        <div className={classes.dropdown}>
            <ChevronDownIcon className={classes.icon} />
            <select {...props}>{children}</select>
        </div>
    );
}

export default Dropdown;
