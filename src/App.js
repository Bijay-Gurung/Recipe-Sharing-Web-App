import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route index element = {<Signup />} />
    //     <Route path="./Pages/Login.js" element={<Login />} />
    //   </Routes>
    //   </BrowserRouter>
    // </div>

    <>
    <Signup/>
    </>
  );
}

export default App;
