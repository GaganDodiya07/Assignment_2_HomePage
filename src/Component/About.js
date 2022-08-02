import React from "react";
import Same from "./Same";
import img1 from "../Images/HomeAS1.png";

const About = () => {
    return(
        <>
       <Same
        title="Know More About Us "
        text="Learning is the process of acquiring new understanding
        , knowledge, behaviors, skills, values, attitudes, and preferences. 
        The ability to learn is possessed by humans, animals, and some machines;
         there is also evidence for some kind of learning in certain plants"
         imgsrc={img1}
         btn="Know More"
         />
        </>
    )
}

export default About;