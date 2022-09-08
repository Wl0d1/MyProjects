import React from "react";
import "./photo.css";
import { FaQuoteRight } from "react-icons/fa";

const Photo = (props) => {
  return (
    <div className="container">
      <span>
        <FaQuoteRight className="icon" />
      </span>
      <img src={props.image} alt="" className="portret"></img>
    </div>
  );
};

export default Photo;


//const Photo = (props) => komponent funkcyjny bezstanowy