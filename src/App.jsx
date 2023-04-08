import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import {  ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode : mode,
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setMode={setMode} mode={mode} />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>

  );
}

export default App;
