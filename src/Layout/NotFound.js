import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
