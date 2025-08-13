import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import FeedItem from "../../components/FeedItem/FeedItem.jsx";
import classes from "./Feed.module.css";

function Feed() {
    return (
        <div className={classes.feed}>
            <FilterBar />
            <FeedItem />
        </div>
    );
}

export default Feed;
