import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/post-1")}>
        Post 1 - Using useNavigate hook
      </button>

      <br />
      <br />

      <Link to="/post-2">Post 2 - Using Link component</Link>
    </div>
  );
}
