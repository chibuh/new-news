import React from "react";
import "./Home.css";
import Navbar from "../../Navbar";
import newsgif from "../../assets/LandingPage/newsGIF.gif";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function MyFunction() {
    navigate("/news");
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h1 className="landingHead">
              Where the world comes to write unique content
            </h1>
            <h2 className="landingText">
              Millions of writers, researchers and news agencies write, share
              and discuss on NewNews- the largest and most advanced content
              responsible platform in the world.
            </h2>
            <div className="row g-3 landingLabel">
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  aria-label="Email address"
                />
              </div>
              <div className="col-sm">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={MyFunction}
                >
                  Lets Go!!
                </button>
              </div>
            </div>
          </div>
          <div className="col LandingImage">
            <img src={newsgif} alt="loading..." width={500} />
          </div>
        </div>
      </div>
    </>
  );
}
