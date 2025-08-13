import { useState } from "react";
import Icon from "../Icon/Icon.jsx";
import classes from "./EventActions.module.css";

function EventActions() {
    const [isStoked, setIsStoked] = useState(false);

    function handleStokeClick() {
        setIsStoked((prev) => !prev);
    }

    return (
        <div className={classes.eventActions}>
            <button className={classes.otherOptions}>
                <Icon name="ellipsis-horizontal" />
            </button>
            <div className={classes.viewers}>
                <Icon name="users" style="solid" />
                <div>000</div>
            </div>
            <button
                onClick={handleStokeClick}
                className={isStoked && classes.stoked}
            >
                <Icon name="fire" style={isStoked && "solid"} />
                <div>000</div>
            </button>
        </div>
    );
}

export default EventActions;
