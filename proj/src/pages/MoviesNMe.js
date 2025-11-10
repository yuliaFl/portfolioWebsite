import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MoviesNMe.css";

function MoviesNMe() {
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &#8592;
      </div>
      <div className="projects-title">Movies-N-Me</div>
      <div className="forward-arrow" onClick={() => navigate("/movies")}>
        &#8594;
      </div>
    </div>
  );
}
export default MoviesNMe;
