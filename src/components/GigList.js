import React from "react";
import "./GigList.css";

const GigList = (props) => {
  return (
    <ul className="gig-list">
      {props.gigInfo.map((gig) => (
        <li className="gig-info" key={gig.title}>
          <h2>{gig.title} </h2> <p>{gig.startDate.slice(0, 10)}</p>
          <img
            src={gig.poster}
            alt="gigPoster"
            title={gig.title}
            className="gig-poster"
          />
        </li>
      ))}
    </ul>
  );
};
export default GigList;
