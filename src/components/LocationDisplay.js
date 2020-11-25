import React from "react";
import { useLocation } from "react-router-dom";
export default function LocationDisplay() {
  let location = useLocation();
  return (
    <>
      <h1 data-testid="location-display">{location.pathname}</h1>
    </>
  );
}
