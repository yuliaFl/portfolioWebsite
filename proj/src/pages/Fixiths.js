import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Fixiths.css";

function Fixiths() {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &#8592;
      </div>
      <div className="projects-title">Fixiths.com</div>
      <div className="forward-arrow" onClick={() => navigate("/moviesnme")}>
        &#8594;
      </div>
      <div className="project-section">
        <img
          src="fixitImages/fixitHome.jpg"
          alt="fixitHome"
          className="project-image"
        />
        <div className="project-text">
          <p>
            This was my first freelance project, where the client requested a
            website that felt fun, interactive, and visually engaging. They
            specifically wanted a Sims-style house concept. Each section of the
            house (roof, windows, kitchen, etc.) was made interactive — when
            hovered over, it revealed the handyman’s related services for that
            particular area. This approach created a unique, game-like
            experience while still being practical for users.
          </p>
        </div>
      </div>
      <div className="project-section">
        <img
          src="fixitImages/fixitKitch.jpg"
          alt="fixitHome"
          className="project-image"
        />
        <img
          src="fixitImages/fixitbed.jpg"
          alt="fixitHome"
          className="project-image"
        />
      </div>
      <div className="project-section">
        <div className="project-text-long">
          <p>
            High-resolution images were carefully selected to enhance the
            overall visual quality of the site and create a professional
            aesthetic. Interactive buttons were strategically positioned over
            corresponding objects within the images, making navigation
            intuitive. To ensure readability, buttons were given a subtle tint
            that maintained text visibility without compromising the imagery.
            Additionally, the navigation bar was implemented as a fixed element,
            remaining accessible at the top of the screen while scrolling for
            seamless user experience.
          </p>
        </div>
      </div>
      <div className="project-section">
        <div className="project-section">
          <img
            src="fixitImages//fixitbath.jpg"
            alt="fixitbath"
            className="project-image"
          />
          <img
            src="/fixitImages/fixitOutdoor.jpg"
            alt="fixitOutdoor"
            className="project-image"
          />
        </div>
      </div>
      <div className="project-section">
        <img
          src="fixitImages/fixitButtons.jpg"
          alt="fixitHome"
          className="project-image"
        />
        <img
          src="fixitImages/fixitNavbar.jpg"
          alt="fixitHome"
          className="project-image"
        />
      </div>
      <div className="project-section">
        <div className="project-text-long">
          <p>
            Interactive hover states were applied to all buttons. When a user
            hovered over a button, a detailed list of handyman services for that
            area appeared, providing clear and immediate information. The
            navigation bar buttons followed the same interaction pattern,
            ensuring consistency in design and functionality across the entire
            site.
          </p>
        </div>
      </div>
      <div className="project-section">
        <img
          src="/fixitImages/fixitReview.jpg"
          alt="fixitReview"
          className="project-image"
        />
        <div className="project-text">
          <p>
            Below the service sections, a dedicated Customer Reviews area was
            implemented. This section featured authentic Google review
            screenshots displayed within a carousel slider. The carousel was
            designed with an optimized automated transition speed of 500ms,
            offering a smooth browsing experience without overwhelming the user.
          </p>
        </div>
      </div>
      <div className="project-section">
        <div className="project-text">
          <p>
            The footer section was designed to serve both branding and
            communication purposes. It featured the handyman’s partner logo with
            a clickable external link, as well as a contact panel containing the
            handyman’s phone number and email. Interactive hover effects were
            applied so the information highlighted on mouseover. When clicked,
            the phone number prompted a direct call option, while the email
            address opened the user’s default email client with a pre-filled
            recipient address for convenience.
          </p>
        </div>
        <img
          src="/fixitImages/contactBottom.jpg"
          alt="contactBottom"
          className="project-image"
        />
      </div>
      <div className="project-section">
        <img
          src="/fixitImages/fixitAbout.jpg"
          alt="fixitReview"
          className="project-image"
        />
        <div className="project-text">
          <p>
            The About page was developed to highlight the handyman’s expertise,
            reliability, and key strengths. Careful use of color palettes, font
            sizing, and typography hierarchy allowed for a structured,
            professional presentation that emphasized credibility and
            trustworthiness.
          </p>
        </div>
      </div>
      <div className="project-section">
        <div className="project-text">
          <p>
            The Contact page reiterated the handyman’s phone number and email
            for easy access, followed by a submission form requiring the user’s
            name, email, and message. Submissions were directly routed to the
            handyman’s email address. A CAPTCHA system was integrated to protect
            against spam and ensure only genuine inquiries were delivered.
          </p>
        </div>
        <img
          src="/fixitImages/fixitContact.jpg"
          alt="fixitContact"
          className="project-image"
        />
      </div>
    </div>
  );
}

export default Fixiths;
