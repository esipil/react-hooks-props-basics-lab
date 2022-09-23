import React from "react";

function About(props) {
  function rendering () {
    if (props.bio) {
      return <p> {props.bio}</p>
    } else {
      return ''
    }
  }



  return (
    <div id="about">
      <h2>About Me </h2>
      { rendering()}
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div> 
  );
}

export default About;
