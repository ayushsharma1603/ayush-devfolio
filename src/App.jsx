import NotFound from "./pages/NotFound"
import {Routes, Route} from "react-router-dom";
import HomeP from "./pages/HomeP"
import ContactP from "./pages/ContactP";

function App() {

  return (

    <Routes>
      <Route path="/" element={<HomeP/>} />
      <Route path="/contact" element={<ContactP/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  )
}

export default App
