import React from "react";
import "./base.css";

const Info = (props) => {
  return (
    <article>
      <h4 className="name">{props.name}</h4>
      <p className="job">{props.job}</p>
    </article>
  );
};

export default Info;

// article -> reprezentuje samodzielna część(niezalezny kawalek tresci) dokumentu lub apki. moze zawierac sekcje

// import React, {useState} from 'react';
// import people from './base';
// import './base.css';

// const Info = () => {
//     const [index, setIndex] = useState(0);
//     const { name, job } = people[index];
//     return (
//     <article className="container">
//       <h4 className="name">{name}</h4>
//       <p className="job">{job.toUpperCase()}</p>
//    </article>
//   );
// };
