import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/post-1")}>
        Post 1 - Using useNavigate hook
      </button>
    </div>
  );
}
