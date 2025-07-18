import { useState } from "react";
import Icon from "../Icon/Icon.jsx";
import classes from "./FeedItem.module.css";

function FeedItem() {
    const [isStoked, setIsStoked] = useState(false);

    function handleStokeClick() {
        setIsStoked((prev) => !prev);
    }

    return (
        <div className={classes.feedItem}>
            <div className={classes.heading}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <div className={classes.countdown}>00:00:00:00</div>
            </div>
            <div className={classes.body}>
                <div className={classes.updatesBox}>
                    <div className={classes.timeTag}>
                        Latest update — Today, 00:00
                    </div>
                    <p className={classes.updateMessage}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className={classes.chatBox}>
                    <p className={classes.chatMessage}>
                        <span className={classes.username}>username:</span>
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className={classes.chatMessage}>
                        <span className={classes.username}>username:</span>
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className={classes.chatMessage}>
                        <span className={classes.username}>username:</span>
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div className={classes.actions}>
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
            </div>
        </div>
    );
}

export default FeedItem;
