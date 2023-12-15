import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const Blog = () => {
  return (
    <>

    <div style={{backgroundColor:"black",width:"100%", height:"130vh"}}>
      <Navbar/>
      <div className="blog">
      <h3
            style={{
              fontWeight: "600",
              color: "white",
              paddingTop: "110px",
              marginBottom: "-4px",
              letterSpacing: "1px",
            }}
          >
            My Blog
          </h3>
          <hr style={{ color: "white" }} />
<br />
<br />
<br />
<br />
          <div className="blog-box">
            <img src="images/blog.jpg" className='blog-img' />
            <div className="blog-data">
            <p>July 17, 2023    |    Large Language Models</p>
            <h3>Leveraging Large Language Models: Unlocking Business Potential</h3>
            <p>Author:Kyle T.peterson <br />Continue reading</p>
            </div>
            
          </div>
      </div>

    </div>
<Footer></Footer>
    </>

  )
}

export default Blog
