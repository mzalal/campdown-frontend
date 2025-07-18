import NavItem from "../NavItem/NavItem.jsx";
import classes from "./NavBar.module.css";

function NavBar() {
    return (
        <nav>
            <a href="#" className={classes.logo}>
                Campdown
            </a>
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
