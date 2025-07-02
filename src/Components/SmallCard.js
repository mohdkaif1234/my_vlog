import React from "react";
import instagram1 from "../logo/instagram.png";
import person from "../Components/R.jpg";
import youtube from "../logo/youtube.png";
import twitter from "../logo/twitter.png";
import facebbok from "../logo/facebook.png";
import "../Pages/DetailsPage.css";
const SmallCard = () => {
  return (
    <div className="smallCard-containeer">
      <div className="smallcard-parent">
        <div>
          <div
            className="smallcard-persion-img bg"
            style={{ backgroundImage: `url(${person})` }}
          ></div>
        </div>
        <div className="smallcard-userdata">
          <div className="h5">Mohd kaif</div>
          <div>14 November 2024</div>
        </div>
      </div>
      <div className="small-social">
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${facebbok})` }}
        ></div>{" "}
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${twitter})` }}
        ></div>{" "}
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${youtube})` }}
        ></div>
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${instagram1})` }}
        ></div>
      </div>
    </div>
  );
};

export default SmallCard;