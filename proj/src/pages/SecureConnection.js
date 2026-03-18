import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SecureConnection.css";

function SecureConnection() {
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        &#8592;
      </div>
      <div className="projects-title">Secure Connection </div>
      <div className="forward-arrow" onClick={() => navigate("/movies")}>
        &#8594;
      </div>

      <div class="project-images">
        <img
          src="SecureConnection_Images/terminaloutput.jpg"
          alt="terminalloutput"
          className="terminaloutput-image"
        />
        <div className="project-text">
          <p>
            This screenshot shows the backend server of the chat application
            running on a local TCP socket. It logs new client connections,
            assigns each user a session, and displays real‑time message
            exchanges between connected clients. The server is built using
            Python’s socket and threading modules, demonstrating low‑level
            network programming, concurrent client handling, and message
            broadcasting logic.
          </p>
        </div>
        <img
          src="SecureConnection_Images/kivy_visual_blank.jpg"
          alt="kivy_visual_blank"
          className="kivy_visual_blank-image"
        />
        <div className="project-text">
          <p>
            {" "}
            This screenshot shows the initial state of the chat client before
            connecting to the server. The UI includes fields for entering a
            username, connecting, typing messages, and sending them. The layout
            is created using Kivy’s KV language and Python classes, showcasing
            skills in UI design, event-driven programming, and linking frontend
            components to backend socket logic.
          </p>
        </div>
        <img
          src="SecureConnection_Images/kivy_visual.jpg"
          alt="kivy_visual"
          className="kivy_visual-image"
        />
        <div className="project-text">
          <p>
            This image displays two instances of the Kivy-based chat client
            running simultaneously on the same machine. Each window represents a
            different user connected to the server through TCP. The interface is
            built with Kivy widgets, while the networking layer uses Python
            sockets to send and receive messages in real time. This demonstrates
            the integration of a graphical UI with asynchronous network
            communication.
          </p>
        </div>
      </div>
    </div>
  );
}
export default SecureConnection;
