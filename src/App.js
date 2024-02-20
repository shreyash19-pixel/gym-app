import Home from "./pages/Home";
import AppContext from "./utils/AppContext";
import { useState } from "react";
function App() {

  const [slider, setSlider] = useState(false)

  const shareData = {
    slider,
    setSlider
  }

  return (
    <div>
      <AppContext.Provider value = {shareData}>
        <Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
