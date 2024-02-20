import Home from "./pages/Home";
import AppContext from "./utils/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
function App() {

  const [slider, setSlider] = useState(false)

  const shareData = {
    slider,
    setSlider
  }

  return (
    <Router>
      <AppContext.Provider value = {shareData}>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/SignUp" element = {<SignUp />} />
          <Route path = "/SignIn" element = {<SignIn />} />
          <Route path = "/Contact" element = {<Contact />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
