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
      
          <div className="card-deck d-flex justify-content-center gap-3"style={{  marginTop: "20px" }}>

    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Status: Renegotiated</div>
      <div className="card-body text-primary">
        <h5 className="card-title">Beamer Auto</h5>
        <p className="card-text">
        Engine Oil Change and Brake Pad Replacement
        </p>
      </div>
    </div>


  
    <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Status: Paid</div>
      <div className="card-body text-secondary">
        <h5 className="card-title">Firm Inc.</h5>
        <p className="card-text">
        Legal Consultation and Drafting Legal Documents
        </p>
      </div>
    </div>
  

    <div className="card border-dangers mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Status: Unpaid</div>
      <div className="card-body text-danger">
        <h5 className="card-title">Denver Medical </h5>
        <p className="card-text">
        Medications and Medical Supplies:
        </p>
      </div>
    </div>

 
    <div className="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Status: Unpaid</div>
      <div className="card-body text-danger">
        <h5 className="card-title">Dental Services.Coe</h5>
        <p className="card-text">
        Comprehensive Dental Checkup and teeth Cleaning
        </p>
      </div>
    </div>

</div>
</div>
</div>


 </>
  );
}

export default MyDashboard;
