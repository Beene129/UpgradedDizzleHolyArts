import React from 'react';
import "../css/Home.css"
import { Link } from 'react-router-dom';


const Home = () => {
  return (



<div className="container">
  <div className="header">
  <Link to="/home">
      <img  src={require("../images/AllenBeenelogo.png")} alt="Insert Logo Here" id="homepic" style={{backgroundColor: "#C6D580", display:"block",  width:"180px", height:"90px" }} />
    </Link> 
    </div>

 <div className="sidebar1">
 <ul className="nav">
          <li>
          <Link to="/"> Home </Link>
          </li>
          <li>
          <Link to="/about"> About Me </Link>
          </li>
          <li>
          <Link to="/donate"> How to Donate </Link>
          </li>
          <li>
          <Link to="/images"> Images  </Link>
          </li>
          <li>
          <Link to="/events"> Upcoming Events </Link>
          </li>
        </ul>
    <div className="imgAnimator">
      <img src={require("../images/AllenBeenelogo.png")} alt="God Bless" id="homeslide" style={{backgroundColor: "#6f7d94", display:"block",  width: "179px", height:"190px"}} />
    </div>
      <p> Hosting art shows is not cheap. It requires renting the space, tables and chairs, beverages, and more, and your financial support goes a long way to helping make this possible. If you’d like to enjoy more of these collaborative events that bring artists together, please donate here:</p>
   </div>

    <div className="content">


      <h1>Biography</h1>
    </div>
  

    <div className="content1" >
      <div className="row"> 


        <div className="column">
          <img src={require("../images/babyshoes.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/businesscard.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/logobranding2.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/partyflyers.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/businessflyer.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/curry.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/customizedbookcover.jpg")} alt="" style={{width:"100%"}}/>
        </div>


        <div className="column">
                  <img src={require("../images/customizedhats1.jpg")} alt="" style={{width:"100%"}} />
                  <img src={require("../images/glassartwork1.jpg")} alt="" style={{width:"100%"}} />
                  <img src={require("../images/customizedhats2.jpg")} alt="" style={{width:"100%"}} />
                  <img src={require("../images/customizedlogo.jpg")} alt="" style={{width:"100%"}} />
                  <img src={require("../images/badue.jpg")} alt="" style={{width:"100%"}} />
                  <img src={require("../images/customizedshoe2.jpg")} alt="" style={{width:"100%"}} />
        </div>  


        <div className="column">
          <img src={require("../images/playanpraise.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/customizedshoe3.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/customizedbookcover.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/handdrawings.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/flyer.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/freshit's.jpg")} alt="" style={{width:"100%"}}/>
          <img src={require("../images/glassartwork.jpg")} alt="" style={{width:"100%"}}/>
          
        </div>



      

        
    </div>
    </div>

  <div className="footer">
    <p>This website was made by Allen K. Beene </p>
    </div>

</div>

  )
}

export default Home;