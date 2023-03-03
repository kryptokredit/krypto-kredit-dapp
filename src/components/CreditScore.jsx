import React, { useState, useEffect } from "react";
import { useSpectralCreditScore } from "../hooks";

const CreditScore = props => {
  const { address } = props;
  const { creditScoreData, isLoading, fetchData } = useSpectralCreditScore(address);

  const handleButtonClick = async () => {
    await fetchData();
  };

  return (
    <div
      className="spectralCreditCard"
      style={{
        border: "1px solid white",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <img
        src="https://uploads-ssl.webflow.com/6384dc706c77d5664d1a1d65/6384dc706c77d5d2fc1a1dbd_logo.png"
        alt="spectral logo"
        style={{
          backgroundColor: "black",
          width: "100%",
          maxWidth: "200px",
          display: "block",
          margin: "0 auto",
        }}
      />
      <h2>Spectral Credit Score</h2>
      <p>This is a credit score calculated from your on-chain activity</p>
      <label>Address: {address ? address : "Not Connected"}</label>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => handleButtonClick()} style={{ color: "black", marginBottom: "10px" }}>
            Calculate Credit Score
          </button>
          <label>Credit Scores: {creditScoreData.score ? creditScoreData.score : "No Score"}</label>
        </div>
      )}
    </div>
  );
};

export default CreditScore;
