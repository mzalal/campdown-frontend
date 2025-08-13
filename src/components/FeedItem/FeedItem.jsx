import EventHeading from "../EventHeading/EventHeading.jsx";
import EventActions from "../EventActions/EventActions.jsx";
import UpdatesCard from "../UpdatesCard/UpdatesCard.jsx";
import classes from "./FeedItem.module.css";

function FeedItem() {
    return (
        <div className={classes.feedItem}>
            <EventHeading />
            <div className={classes.body}>
                <UpdatesCard />
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
                <div className={classes.eventActionsContainer}>
                    <EventActions />
                </div>
            </div>
        </div>
    );
}

export default FeedItem;
