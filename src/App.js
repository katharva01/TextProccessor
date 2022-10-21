import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    if (darkMode === true) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("ligh mode on", "success");
    }
    if (darkMode === false) {
      setDarkMode(true);
      document.body.style.backgroundColor = "#01132c";
      document.body.style.color = "white";
      showAlert("Dark mode on", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };

  return (
    <>
      <Router>
          <Navbar
            title="TextUtils"
            link1="Blog"
            darkMode={darkMode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
        <Routes>
          <Route exact path="/Blog" element={<Blog/>}>
          </Route>
          <Route exact path="/" element={<TextForm
              title="Enter the text to analyze here"
              darkMode={darkMode}
              toggleMode={toggleMode}
              giveAlert={showAlert}
            />} >

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
