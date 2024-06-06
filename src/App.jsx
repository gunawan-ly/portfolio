import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
