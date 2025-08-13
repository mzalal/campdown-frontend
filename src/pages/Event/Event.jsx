import EventDetails from "../../components/EventDetails/EventDetails.jsx";
import Chat from "../../components/Chat/Chat.jsx";
import classes from "./Event.module.css";

function Event() {
    return (
        <div className={classes.event}>
            <EventDetails />
            <Chat />
        </div>
    );
}

export default Event;
