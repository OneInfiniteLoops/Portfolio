import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Introduction />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
