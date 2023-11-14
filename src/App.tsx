import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/landing/Landing";
import Search from "./pages/search/Search";
import View from "./pages/view/View";
import Nav from "./components/shared/nav/Nav";
import Prodemo from "./pages/demo/Prodemo";


function App() {
  return (
    <AnimatePresence mode="wait">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/demo" element={<Prodemo />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
        <Route path="*" element={<h1>no page</h1>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
