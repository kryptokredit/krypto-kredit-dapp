import React, { useState } from "react";

function MyDashboard() {
  const [activeLink, setActiveLink] = useState("Active");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <div className="card mb-3">
        <img
          src="\header.png"
          className="card-img-fluid"
          alt=""
          style={{ height: "170px", marginBottom: "-100px" }}
        />
        <div className="card-body">
          <div>
            <img
              src="\profile-pic.png"
              className="img-thumbnail rounded-circle"
              alt=""
              style={{ height: "220px" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              className="card-text"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginLeft: "30px",
                marginTop: "20px",
              }}
            >
              0x25DA9E1...
            </p>
            <p
              className="card-text"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                marginRight: "70px",
                marginTop: "35px",
              }}
            >
              Score: 585
            </p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "Active" ? "active" : ""
                  }`}
                  aria-current="true"
                  href="#"
                  onClick={() => handleLinkClick("Active")}
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "Link" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleLinkClick("Link")}
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-1" style={{ justifyContent: "center", marginTop: "20px" }}>
            <div className="col">
              <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Staus: Paid </div>
                <div className="card-body">
                  <h5 className="card-title">Dent Services.Co</h5>
                  <p className="card-text">
                  Comprehensive check up with teeth cleaning
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Light card title</h5>
                  <p className="card-text">
                 Comprehensive check up with teeth cleaning
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyDashboard;
