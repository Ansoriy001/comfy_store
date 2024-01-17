import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <main className="h-full dark:bg-slate-800">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
