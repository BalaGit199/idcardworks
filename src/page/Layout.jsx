import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "../components/navbar/NavBarComponent";
import Dashboardcomponent from "../components/dashboard/Dashboardcomponent";
function Layout() {
  return (
    <div>
      <NavBarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboardcomponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
