import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Introduction />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
