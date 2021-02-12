import React from "react";
import Navbar from "../components/Navbar";

const layout = (props) => {
  console.log("THE PROPS IN LAYOUT",props)
  return(
      <div>
      <Navbar />
      {props.children}
    </div>
  )
}
  

export default layout;
