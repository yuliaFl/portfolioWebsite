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
      <div className="projects-title">Trana-Solutions.com</div>
  <div className="forward-arrow" onClick={() => navigate("/fixiths")}>
    &#8594; {/* Right arrow */}
  </div>
      {/* Video Section */}
      <div className="video-container">
        <a
          href="https://trana-solutions.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video width="600" autoPlay loop muted playsInline>
            <source src="/videos/tranaVid.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </a>
        
      </div>
      <div className="trana-project-section">
        <div className="visit-link">
          <a
            href="https://trana-solutions.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <u>Click here</u>
            </strong>{" "}
            to visit website
          </a>
        </div>
        <div className="project-text-long">
          <p>
            This website is built for a financial company that partners with
            banks and large corporations. The design uses green and gold tones
            to create a sense of trust and comfort. The navigation bar is fixed
            at the top and transitions to a transparent style when the user
            scrolls down.
          </p>
          <p>
            On the homepage, a bold title and featured image capture attention,
            followed by key highlights that outline what visitors can expect.
            Quick contact information is also displayed for easy access.
          </p>
          <p>
            Interactive elements include underlined links on hover and a map
            snippet that subtly enlarges when hovered over. When clicked, the
            map opens in a new tab, directing the user to the company’s location
            on Google Maps.
          </p>
        </div>
      </div>
      <div className="trana-project-section">
        <img
          src="tranaImages/trana_services.jpg"
          alt="trana"
          className="trana-image"
        />
        <img
          src="tranaImages/trana_resources.jpg"
          alt="trana"
          className="trana-image"
        />
        <img
          src="tranaImages/trana_contact.jpeg"
          alt="trana"
          className="trana-image"
        />
        <div className="project-text">
          <p>
            Screenshots reflect the initial deployment version with adjusted
            information. Some sections, including the contact area, were later
            removed per client request.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TranaSolutions;
