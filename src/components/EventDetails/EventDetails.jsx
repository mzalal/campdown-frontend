import EventHeading from "../EventHeading/EventHeading.jsx";
import EventActions from "../EventActions/EventActions.jsx";
import UpdatesCard from "../UpdatesCard/UpdatesCard.jsx";
import classes from "./EventDetails.module.css";

function EventDetails() {
    return (
        <div className={classes.eventDetails}>
            <EventHeading />
            <p>
                Apple’s WWDC 2025, set for June 9–13, is expected to unveil major
                software updates including iOS 26, macOS 26, and more. Rumors suggest
                a bold new design language, deeper AI integration, and improved
                developer tools, potentially reshaping user experiences across
                iPhone, iPad, Mac, Apple Watch, and Vision Pro platforms.
            </p>
            <EventActions />
            <div className={classes.updatesContainer}>
                <UpdatesCard />
                <UpdatesCard />
                <UpdatesCard />
            </div>
        </div>
    );
}

export default EventDetails;
