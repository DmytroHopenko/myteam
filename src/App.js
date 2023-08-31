import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/myteam/home" element={<HomePage />} />
          <Route path="/myteam/about" element={<AboutPage />} />
          <Route path="/myteam/contact" element={<ContactPage />} />
          <Route path="/myteam/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
