import classes from "./UpdatesCard.module.css";

function UpdatesCard() {
    return (
        <div className={classes.updatesCard}>
            <div className={classes.timeTag}>Latest update — Today, 00:00</div>
            <p className={classes.updateMessage}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </p>
        </div>
    );
}

export default UpdatesCard;
