import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Page1 />} />
        <Route path="/productdetails" element={<Page2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
