import React from "react";

function Home() {
  return (
    <div
      style={{ margin: "0 2%" }}
      className="row align-items-center py-5 hero-section"
    >
      <div className="col-md-6">
        <h1
          style={{
            background: "linear-gradient(to right, #00bfff, #32cd32)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="display-5 fw-bold lh-1 mb-3 text-left"
        >
          Join the future of finance, earn credit on chain for your everyday
          transactions
        </h1>
        <p style={{ color: "black" }} className="lead mb-4 text-left">
          Redefining Credit: A Peer-to-Peer Approach
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
          <button
            style={{ background: "#12E26C" }}
            type="button"
            className="btn btn-lg px-4 me-md-2"
          >
            Get Started
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <img
          style={{ maxWidth: "80%" }}
          alt="Hero title"
          src="./undraw_sharing_knowledge_03vp.svg"
        />
      </div>
    </div>
  );
}

export default Home;
