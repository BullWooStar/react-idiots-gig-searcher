import React from "react";
import "./GigList.css";

const GigList = ({ gigInfo }) => {
  return gigInfo.length === 0 ? (
    <p>검색결과가 없습니다</p>
  ) : (
    <ul className="gig-list">
      {gigInfo.map((gig) => (
        <li className="gig-info" key={gig.title}>
          <article>
            <h2>{gig.title} </h2>
            <time dateTime={gig.startDate}>
              {Intl.DateTimeFormat("ko-KR").format(new Date(gig.startDate))}
            </time>
            <img
              src={gig.poster}
              alt={`${gig.title} 포스터`}
              title={gig.title}
              className="gig-poster"
            />
          </article>
        </li>
      ))}
    </ul>
  );
};
export default GigList;
