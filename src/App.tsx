import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tv from "./pages/tv";
import Freeze from "./pages/freeze";
import Washer from "./pages/washer";
import Cleaner from "./pages/cleaner";

import { Homepage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="tv" element={<Tv />} />
        <Route path="freeze" element={<Freeze />} />
        <Route path="washer" element={<Washer />} />
        <Route path="cleaner" element={<Cleaner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
