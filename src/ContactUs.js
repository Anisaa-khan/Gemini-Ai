import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const ContactUs = () => {
  return (
    <>
  <Navbar/>
    <div style={{background:"black" ,width:"100%",height:"100vh"}}>
    <div className="contact">
      <h3
            style={{
              fontWeight: "600",
              color: "white",
              paddingTop: "110px",
              marginBottom: "-4px",
              letterSpacing: "2px",
            }}
          >
            Contact Us
          </h3>
          <hr style={{ color: "white" }} />
          <div className="contact-data">
        <h5>For more information reach out to us below.</h5>
      <p style={{fontFamily:"sans-serif",color:"#5d5a59", marginTop:"50px"}}>We know that our clients each have special needs and circumstances. Tell us more about your project, and we will get back to you soon with some ideas of how we can support you in organizing your process and results.</p>
       <h4 style={{marginTop:"50px"}}>Gemini Ai</h4>
       <p style={{fontFamily:"sans-serif",color:"#5d5a59",marginTop:"40px"}} >asosa@reofcapital.com  |  kpeterson@reofcapital.com</p>
          </div>
</div>
<br /><br /><br />
<Footer/>
    </div>
  
    </>    
 
  )
}

export default ContactUs
