import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
   
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "black";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.background = "white";
      showAlert("light mode enabled", "success");
    }
  };


  const toggleMode2 = (cls) => {
    clrremove();
    document.body.classList.add('bg-'+ cls)
  };

  const clrremove = () => {
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    
    
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextAnalyzer"
        element1="Home"
        element2="About Us"
        mode={mode}
        toggleMode={toggleMode}
        toggleMode2={toggleMode2}
      />
      <Alert alert={alert} />
      <div className="container my-3" />
      <Routes>
          <Route exact path="/about"  element={<About mode={mode} />}>
         </Route>
          <Route exact path="/" element={<Textform
        heading="TextAnalyzer - Word Counter , Character Counter, Remove Extra spaces , Copy Text"
        mode={mode}
        showAlert={showAlert}
      />}>  
          
          </Route>
        </Routes>
        </Router>
       
       
    </>
  );
}

export default App;

       