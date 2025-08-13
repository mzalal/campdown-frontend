import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem.jsx";
import classes from "./NavBar.module.css";

function NavBar() {
    return (
        <nav>
            <Link to="/" className={classes.logo}>
                Campdown
            </Link>
            <div>
                <NavItem href="#" icon="bell">
                    Notifications
                </NavItem>
                <NavItem href="#" icon="cog">
                    Preferences
                </NavItem>
                <NavItem href="#" icon="user">
                    Profile
                </NavItem>
            </div>
        </nav>
    );
}

export default NavBar;
