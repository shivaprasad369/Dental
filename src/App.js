
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About/AboutPage";
import Services from "./components/services/Services";
import ContactPage from "./components/Contact/ContactPage";




function App() {
  return (
    <h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<ContactPage/>}/>


      </Routes>
      </BrowserRouter>

  </h1>
  );
}

export default App;
