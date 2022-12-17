import React from 'react';
import './App.css';
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/api/books" element={<Saved />} />
        <Route path="/api/books/:id" element={<Saved />} />
        <Route path="/saved/" element={<Saved />} />
        <Route element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
