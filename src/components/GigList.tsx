import React from "react";
import "./GigList.css";
import GigInfo from "../model/GigInfo";
import { useSearchGig } from "../hook/searchGig";
import { useRecoilValue } from "recoil";
import { inputBandName } from "../App";

const GigList = () => {
  const bandName = useRecoilValue(inputBandName);

  const gigData = useSearchGig(bandName).data;

  return (
    gigData &&
    (gigData.length === 0 ? (
      <p>검색결과가 없습니다</p>
    ) : (
      <ul className="gig-list">
        {gigData.map((gig) => (
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
    ))
  );
};
export default GigList;
