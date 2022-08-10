import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Introduction />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
