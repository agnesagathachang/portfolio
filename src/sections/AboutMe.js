import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="about-me">
      <div className="aboutme-container">
        <div className="aboutme-image">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/decorations/pic.png`}
              alt="Agnes"
            />
          </div>
        </div>
        <div className="aboutme-content">
          <div id="about-me-title" className="aboutme-title">
            About Me!
          </div>
          <span className="emoji">👋</span> Hello! I'm Agnes, a passionate web
          developer with a knack for crafting seamless and user-friendly digital
          experiences.
          <br />
          <br /> 💻 With a robust skill set encompassing{" "}
          <span className="highlight">HTML</span>,
          <span className="highlight"> CSS</span>, and{" "}
          <span className="highlight">JavaScript</span>, I specialize in
          creating visually stunning and intuitive user interfaces that drive
          engagement and enhance user experiences. <br />
          <br /> 🔧 Leveraging the power of modern frameworks like{" "}
          <span className="highlight">React</span> and{" "}
          <span className="highlight">Express.js</span>, I develop dynamic and
          scalable web applications that push boundaries and deliver seamless
          user experiences. <br />
          <br /> ⚙️ On the server side, I'm well-versed in{" "}
          <span className="highlight">Node.js</span>, utilizing its power to
          develop efficient and high-performing backend solutions. My database
          expertise includes <span className="highlight">MongoDB</span> and{" "}
          <span className="highlight">PostgreSQL</span>, ensuring data integrity
          and optimal performance.
        </div>
        <div></div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/decorations/planet.png`}
        className="aboutme-background"
        alt="Background"
      />
    </div>
  );
}

export default AboutMe;