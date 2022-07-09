import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="customers" element={<Customers />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
