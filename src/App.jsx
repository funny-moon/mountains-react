import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import SiteView from "./views/SiteView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/site" element={<SiteView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
