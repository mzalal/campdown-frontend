import { useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";

function NotFound() {
    const navigate = useNavigate();

    setTimeout(() => navigate("/", { replace: true }), 5000);

    return (
        <div className={classes.notFound}>
            <h2>404</h2>
            <p>This page does not exist. Redirecting...</p>
        </div>
    );
}

export default NotFound;
