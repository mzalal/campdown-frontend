import classes from "./EventHeading.module.css";

function EventHeading() {
    return (
        <div className={classes.eventHeading}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className={classes.countdown}>00:00:00:00</div>
        </div>
    );
}

export default EventHeading;
