import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <h1 className="mt-5 text-center">
        Remember Less. Do Better. Accomplish More.
      </h1>
      <div className="text-center">
        <Link to="/Authenticator">
          <button id="ButtonHomeAuth" className="btn btn-primary rounded-pill">
            Get Started!
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
