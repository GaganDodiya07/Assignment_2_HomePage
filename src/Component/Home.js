import React from "react";
import homeimg from '../Images/HomeAS.png';
import '../Css/HomeAbout.css';
import Same from "./Same";

const Home = () => {
    return(
        <>
     <Same
     title="Learning Made Easy"
     text="Learning is the process of acquiring new understanding
     , knowledge, behaviors, skills, values, attitudes, and preferences. 
     The ability to learn is possessed by humans, animals, and some machines;
      there is also evidence for some kind of learning in certain plants"
      imgsrc={homeimg}
      btn="Read More"
     />
        </>
    )
}

export default Home;