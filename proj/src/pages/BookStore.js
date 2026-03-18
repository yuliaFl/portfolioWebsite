import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookStore.css";

function BookStore() {
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &#8592;
      </div>
      <div className="projects-title">Book Store</div>
      <div className="forward-arrow" onClick={() => navigate("/SecureConnection")}>
        &#8594;
      </div>
      <div className="reconstruction-container">
  <img
    src="/reconstruction.jpg"
    alt="Page under reconstruction"
    className="reconstruction-image"
  />
  <p className="reconstruction-text">
    This page is currently being updated. Please check back soon.
  </p>
</div>
    </div>
  );
}
export default BookStore;
