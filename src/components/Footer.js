import React from "react";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-data">
        <p style={{ color: "#5d5a55",fontSize:"15px"}}>
          Copywrite@ 2023 Gemini AI-All Rights Reserved.
        </p>
        <ul
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            listStyle: "none",
            marginTop: "10px",
            fontSize:"18px"
          }}
        >
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
