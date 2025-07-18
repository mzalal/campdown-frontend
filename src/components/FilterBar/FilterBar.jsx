import Dropdown from "../Dropdown/Dropdown.jsx";
import FilterOption from "../FilterOption/FilterOption.jsx";
import Icon from "../Icon/Icon.jsx";
import classes from "./FilterBar.module.css";

function FilterBar() {
    return (
        <div className={classes.filterBar}>
            <Dropdown name="sort" id="sort">
                <option value="popular" defaultValue={true}>
                    Popular
                </option>
                <option value="new">New</option>
            </Dropdown>
            <FilterOption icon="fire">Stoked</FilterOption>
            <FilterOption icon="video-camera">Live</FilterOption>
            <button className={classes.searchButton}>
                <Icon name="magnifying-glass" />
            </button>
        </div>
    );
}

export default FilterBar;
