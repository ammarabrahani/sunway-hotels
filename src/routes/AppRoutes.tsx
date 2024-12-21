import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./RouteConfig";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component, exact }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
