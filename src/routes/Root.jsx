import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";

function Root() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;
