import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Hero = () => {
  return (
    <>  <Navbar />
      <div className="hero">
      <div className="data" >
        <h1>ACCELERATING INNOVATION THROUGH ARTIFICIAL INTELLIGENCE</h1>
        <p>Leading the revolution of Artificial Intelligence for Augmented Intelligence (A.I. for A.I.)</p>
        <button className="btn">Find Out More</button>
      </div>
      </div>
      {/* 1st section------------------- */}
      <div className="herosection">
        <div className="row">
          <div className="col-5">
            <img src="images/image3.jpg" className="sec-img" />
          </div>
          <div className="col-5" id="data">
            <h1> DRIVING A.I. FOR A.I.</h1>
            <p>
              Leverage the power of cutting-edge AI and ML to solve humankind's
              most challenging problems through discovery, innovation,
              transparency and optimization with the goal of augmenting human
              intelligence.
            </p>
            <button className="btn">Find Out More</button>
          </div>
        </div>
      </div>
      {/* 2nd section--------------------- */}
      <div className="hero-section">
        <div style={{ width: "85%", margin: "auto" }}>
          <h3
            style={{
              fontWeight: "600",
              color: "white",
              paddingTop: "30px",
              marginBottom: "-5px",
              letterSpacing: "2px",
            }}
          >
            Areas Of Expertise
          </h3>
          <hr style={{ color: "white" }} />
        </div>

        <div
          className="row"
          style={{ justifyContent: "space-evenly", marginTop: "40px" }}
        >
          <div className="hero-data">
            <img src="images/image6.jpg" className="hero-img" />
            <h3>Computer vision</h3>
            <p>
              Object DETECTION|SCENE <br />
              UNDERSTANDING | ANOMALY DETECTION
            </p>
          </div>
          <div className="hero-data">
            <img src="images/image4.jpg" className="hero-img" />
            <h3>Geospatial Science</h3>
            <p>
              MULTI-SOURCE DATA FUSION | CONTINUOUS MONITORING | PLANNING &
              INTELLIGENCE
            </p>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          <div className="hero-data">
            <img src="images/image5.jpg" className="hero-img" />

            <h3>Integrative Technologies</h3>
            <p>
              DOMAIN KNOWLEDGE TRANSFER | DATA FUSION | ENHANCED DECISION MAKING
              | LARGE LANGUAGE MODELS (LLMs)
            </p>
          </div>
          <div className="hero-data">
            <img src="images/image2.jpg" className="hero-img" />
            <h3>Human Health</h3>
            <p>
              PERSONALIZED HEALTHCARE | BIOSENSOR INTEGRATION | PREVENTATIVE
              MEDICINE
            </p>
          </div>
        </div>
      </div>
      {/* 3rd section--------------------- */}
      <div className="hero-section2">
        <div className="data2">
          <h3
            style={{
              fontWeight: "600",
              color: "white",
              paddingTop: "30px",
              marginBottom: "-5px",
              letterSpacing: "2px",
            }}
          >
            Our Services
          </h3>
          <hr style={{ color: "white" }} />

          <div className="row" style={{ paddingTop: "40px" }}>
            <div className="col-6">
              <img src="images/sensor.jpg" className="data2-img" />
            </div>
            <div className="col-6" id="data2">
              <h3>DATA & SENSORS</h3>
              <p>
                We take data agnostic of the source or sensor and turn it into
                actionable insights. <br /> <br />
                MULTI-SENSOR DATA FUSION | INTELLIGENT DATA LABELING
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "60px" }}>
            <div className="col-6" id="data2">
              <h3>MODELING</h3>
              <p>
                We utilize state-of-the-art deep learning techniques to create
                powerful predictive models trained by human input. <br /> <br />
                HUMAN-IN-THE-LOOP | ACTIVE LEARNING | ACCELERATED DEVELOPMENT
              </p>
            </div>
            <div className="col-6">
              <img src="images/modelingg.jpg" className="data2-img" />
            </div>
          </div>
          <div className="row" style={{ paddingTop: "60px" }}>
            <div className="col-6">
              <img src="images/deployment.jpg" className="data2-img" />
            </div>
            <div className="col-6" id="data2">
              <h3>DEPLOYMENT</h3>
              <p>
                We provide a robust framework for turning models into functional
                value drivers that deliver reliable actionable insights in
                real-time. <br /> <br />
                EDGE PREDICTIONS | MODEL MONITORING | CONTINUOUS
                LEARNING
              </p>
            </div>
          </div>
        </div>
     
      </div>
      <Footer/>
    </>
  );
};

export default Hero;
