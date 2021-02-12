import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Medium-Clone</h1>
        <p className="lead">
          We make all kinds of awesome blog about various topics
        </p>
        <hr className="my-4" />
        <p>Click the button below to checkout our awesome blog</p>
        <Link className="btn btn-primary btn-lg" to="/blog" role="button">
          checkout
        </Link>
      </div>
    </div>
  );
}

export default Home;
