import Dropdown from "../Dropdown/Dropdown.jsx";
import FilterOption from "../FilterOption/FilterOption.jsx";
import Input from "../Input/Input.jsx";
import Icon from "../Icon/Icon.jsx";
import classes from "./FilterBar.module.css";
import { useState } from "react";

function FilterBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    function handleSearchOpenClose() {
        setIsSearchOpen((prev) => !prev);
    }

    if (isSearchOpen) {
        return (
            <div className={classes.filterBar}>
                <button
                    className={classes.closeButton}
                    onClick={handleSearchOpenClose}
                >
                    <Icon name="x-mark" />
                </button>
                <Input placeholder="Search"></Input>
            </div>
        );
    } else {
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
                <button
                    className={classes.searchButton}
                    onClick={handleSearchOpenClose}
                >
                    <Icon name="magnifying-glass" />
                </button>
            </div>
        );
    }
}

export default FilterBar;
