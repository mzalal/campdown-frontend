import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Feed from "./pages/Feed/Feed.jsx";
import Event from "./pages/Event/Event.jsx";
import EventEdit from "./pages/EventEdit/EventEdit.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Feed /> },
            { path: "/event", element: <Event /> },
            { path: "/event/:id/edit", element: <EventEdit /> },
            { path: "*", element: <NotFound /> }
        ]
    }
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
