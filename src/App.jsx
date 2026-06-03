import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Class from "./components/Class/Class";
import Awards from "./components/Awards/Awards";
import Tips from "./components/Tips/Tips";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/class" element={<Class />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/tips" element={<Tips />} />
          <Route
            path="*"
            element={
              <h2 style={{ padding: "2rem", textAlign: "center" }}>
                404 – Not Found
              </h2>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
