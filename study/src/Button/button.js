import "./button.css";
import useFetch from "../Hook/useFetch.js";
import React, { useState } from "react";
// import Info from "./Base/database.js";
// import Text from "./Text/text.js";
// import Photo from "./Photo/photo.js";

const Button = () => {
  const [randomPerson, setRandomPerson] = useState(0)
  const { id } = useFetch();

  // const [index, setIndex] = useState("");

  const randomPerson2 = () => { 
    let randomPersonClick = Math.floor(Math.random() * id.length)
    setRandomPerson(randomPersonClick)
  }
  console.log('random', randomPerson)

  return (
    <div>
      <button className="btn-random" onClick={randomPerson2}>
        Suprise me
      </button>
    </div>
  );
}

export default Button;
