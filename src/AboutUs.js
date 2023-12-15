import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "105vh", backgroundColor: "black" }}>
        <div className="aboutus">
          <h3
            style={{
              fontWeight: "600",
              color: "white",
              paddingTop: "100px",
              marginBottom: "-4px",
              letterSpacing: "1px",
            }}
          >
            About Gemini AI
          </h3>
          <hr style={{ color: "white" }} />
          <div
          className="row"
          style={{ justifyContent: "space-evenly", marginTop: "40px" }}
        >
          <div className="about-data">
            <img src="images/0urvision.jpg" className="about-img" />
            <h4>Our Vision</h4>
            <p>
            At Gemini AI, we envision a world where technology is used to solve the most pressing challenges facing humanity.
            </p>
          </div>
          <div className="about-data">
            <img src="images/expert.jpg" className="about-img" />
            <h4>Our Expertise</h4>
            <p>
            Our team has expertise in a range of technical areas including artificial intelligence, robotics, healthcare and foundational sciences.
            </p>
          </div>
          <div className="about-data">
            <img src="images\approach.jpg" className="about-img" />
            <h4>Our Approach</h4>
            <p>
            We take a collaborative approach to every project, working closely with our clients to ensure their needs are met and their expectations are exceeded.
            </p>
          </div>
        </div>
        </div>
       
      </div>
      {/* ----------------Aboutus2------------------ */}
<div style={{ width: "100%", height: "115vh", backgroundColor: "#161616" }}>
<div className="aboutus2">
<h3
            style={{
              fontWeight: "600",
              color: "white",
              paddingTop: "100px",
              marginBottom: "-3px",
              textTransform:"uppercase"
            }}
          >
            Meet Our Team
          </h3>
          <hr style={{ color: "white" }} />
          <div
          className="row"
          style={{ justifyContent: "space-evenly", marginTop: "40px" }}
        >
          <div className="about-data" >
            <img src="images/0urvision.jpg" className="about-img" />
            <h3 style={{color:"white",paddingTop:"25px"}}>Cheif A.I. Officer</h3>
            <p style={{padding:"10px 25px", color:"#a4a4a4"}}>
            Our Chief AI Officer, Kyle, is a scientist, researcher, and expert in the field of applied Artificial Intelligence (A.I.). He has extensive experience developing and implementing A.I. for large scale applications and helping teams develop sustainable solutions
            </p>
          </div>
          <div className="about-data">
            <img src="images/expert.jpg" className="about-img" />
            <h3 style={{color:"white", paddingTop:"25px"}}>Chief Operations Officer</h3>
            <p style={{padding:"10px 25px", color:"#a4a4a4"}} >
            Our COO brings over 15 years of experience in consulting and investment strategy, with a strong focus on software and technology. With a background in federal funding and technology development,such as the NSF, NIH, DoEd, and DoD.
            </p>
          </div>
          
</div>
</div>
</div>
<Footer/>
    </>
  );
};

export default AboutUs;
