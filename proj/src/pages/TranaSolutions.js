import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TranaSolutions.css";

function TranaSolutions() {
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &#8592;
      </div>
      <div className="trana-title">Trana-Solutions.com</div>
    </div>
  );
}
export default TranaSolutions;
