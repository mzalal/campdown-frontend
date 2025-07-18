import NavBar from "./components/NavBar/NavBar.jsx";
import FilterBar from "./components/FilterBar/FilterBar.jsx";
import FeedItem from "./components/FeedItem/FeedItem.jsx";
import "./App.css";

function App() {
    return (
        <>
            <NavBar />
            <main>
                <FilterBar />
                <FeedItem />
            </main>
        </>
    );
}

export default App;
