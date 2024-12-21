import React from "react";
import Hotel from "../components/views/Hotel";
import HotelDetails from "../components/views/HotelDetails";

export interface Route {
  path: string; // Path of the route
  component: React.FC; // Component to render
  exact?: boolean; // Whether the route should match exactly
}

export const routes: Route[] = [
  {
    path: "/", // Home Page
    component: Hotel,
    exact: true,
  },
  {
    path: "/hotels/:id", // Hotel Details Page
    component: HotelDetails,
  },
];
