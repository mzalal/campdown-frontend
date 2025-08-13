import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Feed from "./pages/Feed.jsx";
import Event from "./pages/Event.jsx";
import EventEdit from "./pages/EventEdit.jsx";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Feed /> },
            { path: "/event", element: <Event /> },
            { path: "/event/:id/edit", element: <EventEdit /> }
        ]
    }
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
