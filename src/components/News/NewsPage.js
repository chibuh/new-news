import React from "react";
import "./NewsPage.css";
import NewsMidldle from "./NewsMiddle.js";
import NewsLeftNav from "./NewsLeftNav.js";

export default function NewsPage() {
  return (
    <div className="container NewsPageContainer">
      <div className="row">
        <div className="col-2">
          <NewsLeftNav />
        </div>
        <div className="col-10">
          <NewsMidldle />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
