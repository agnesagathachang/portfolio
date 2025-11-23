import React, { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    const handleIntersection = (entries, classToAdd, classToRemove) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      handleIntersection(entries, "show", "show");
    });

    const observer2 = new IntersectionObserver((entries) => {
      handleIntersection(entries, "bounce-aboutme", "bounce-aboutme");
    });

    const hiddenElements = document.querySelectorAll(".aboutme-content");
    const hiddenElements2 = document.querySelectorAll(".aboutme-image");
    const hiddenElements3 = document.querySelectorAll(".aboutme-title");

    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer.observe(el));
    hiddenElements3.forEach((el) => observer2.observe(el));
  }, []);

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
          <div id="about-me-title" className="aboutme-title title">
            About Me!
          </div>
          <span className="emoji">👋</span>&nbsp; Hello! I'm Agnes, a passionate{" "}
          software engineer specializing in
          <span className="highlight"> web development</span> with hands-on
          experience in building clean, efficient, and user-focused
          applications. Committed to continuous learning and collaboration, I'm
          dedicated to staying ahead of the curve by constantly adapting to and
          mastering new technologies.
          <br />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
