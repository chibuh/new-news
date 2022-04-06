import React from "react";
import "./NewsPage.css";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";

export default function NewsLeftNav() {
  return (
    <div style={{ position: "fixed" }}>
      <div className="NewsLeftNavIcons">
        <div className="IconsLeft">
          <ExploreIcon fontSize="large" />
        </div>
        <div className="IconsLeft">
          <PersonIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}
