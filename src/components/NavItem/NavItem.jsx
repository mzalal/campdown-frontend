import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./NavItem.module.css";

import { BellIcon as BellIconOutline } from "@heroicons/react/24/outline";
import { Cog8ToothIcon as Cog8ToothIconOutline } from "@heroicons/react/24/outline";
import { UserIcon as UserIconOutline } from "@heroicons/react/24/outline";

import { BellIcon as BellIconSolid } from "@heroicons/react/24/solid";
import { Cog8ToothIcon as Cog8ToothIconSolid } from "@heroicons/react/24/solid";
import { UserIcon as UserIconSolid } from "@heroicons/react/24/solid";

function NavItem({ href, icon, children }) {
    const [isHovered, setIsHovered] = useState(false);
    let Icon;

    switch (icon) {
        case "bell":
            Icon = isHovered ? BellIconSolid : BellIconOutline;
            break;
        case "cog":
            Icon = isHovered ? Cog8ToothIconSolid : Cog8ToothIconOutline;
            break;
        case "user":
            Icon = isHovered ? UserIconSolid : UserIconOutline;
            break;
    }

    function handleMouseOver() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <Link
            to={href}
            className={classes.navItem}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <Icon className={classes.icon} />
            <div className={classes.label}>{children}</div>
        </Link>
    );
}

export default NavItem;
