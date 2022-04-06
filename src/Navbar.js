import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">NewNews</span>
        <a
          className="nav-link active"
          aria-current="page"
          style={{ color: "#151515" }}
          href="https://medium.com/@kshitij1504/newnews-postman-api-hackathon-the-revolutionary-news-application-318f6f37c31d"
        >
          Docs
        </a>
      </div>
    </nav>
  );
}
