// This is the simplest and most straight forward way I could think of and find
// to implement this "Icon" component given the way the Heroicons library is meant
// to be used, and without importing every icon (*) and potentially causing performance
// issues.
// Yet it still feels like a stupid and amateurish way to do it.

import { BellIcon as BellIconOutline } from "@heroicons/react/24/outline";
import { Cog8ToothIcon as Cog8ToothIconOutline } from "@heroicons/react/24/outline";
import { UserIcon as UserIconOutline } from "@heroicons/react/24/outline";
import { FireIcon as FireIconOutline } from "@heroicons/react/24/outline";
import { VideoCameraIcon as VideoCameraIconOutline } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon as MagnifyingGlassIconOutline } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { BellIcon as BellIconSolid } from "@heroicons/react/24/solid";
import { Cog8ToothIcon as Cog8ToothIconSolid } from "@heroicons/react/24/solid";
import { UserIcon as UserIconSolid } from "@heroicons/react/24/solid";
import { FireIcon as FireIconSolid } from "@heroicons/react/24/solid";
import { VideoCameraIcon as VideoCameraIconSolid } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon as MagnifyingGlassIconSolid } from "@heroicons/react/24/solid";

import classes from "./Icon.module.css";

function Icon({ name, style }) {
    let Icon;

    switch (name) {
        case "bell":
            Icon = style == "solid" ? BellIconSolid : BellIconOutline;
            break;
        case "cog":
            Icon = style === "solid" ? Cog8ToothIconSolid : Cog8ToothIconOutline;
            break;
        case "user":
            Icon = style === "solid" ? UserIconSolid : UserIconOutline;
            break;
        case "fire":
            Icon = style === "solid" ? FireIconSolid : FireIconOutline;
            break;
        case "video-camera":
            Icon = style === "solid" ? VideoCameraIconSolid : VideoCameraIconOutline;
            break;
        case "magnifying-glass":
            Icon =
                style === "solid"
                    ? MagnifyingGlassIconSolid
                    : MagnifyingGlassIconOutline;
            break;
        case "chevron-down":
            Icon = ChevronDownIcon;
            break;
        case "x-mark":
            Icon = XMarkIcon;
            break;
    }
    return <Icon className={classes.icon} />;
}

export default Icon;
