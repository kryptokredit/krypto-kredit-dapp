import React, { useState } from "react";

function ViewInvoice() {
  const [editable, setEditable] = useState(false);
  const [renegotiateText, setRenegotiateText] = useState("");

  const handleRenegotiateClick = () => {
    setEditable(true);
  };

  const handleInputChange = event => {
    setRenegotiateText(event.target.value);
  };

  const handleSendClick = () => {
    setEditable(false);
    // do something with renegotiateText, e.g. send it to the server
  };

  return (
    <div
      className="card mx-auto my-5 text-center"
      style={{
        width: "37rem",
        height: "29.5rem",
        position: "relative",
        bottom: 20,
      }}
    >
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="card">
          <h4 className="card-header">Invoice</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              From: <span className="float-right">Dental Services.Co</span>
            </li>
            <li className="list-group-item">
              Status: <span className="float-right">Unpaid</span>
            </li>
            <li className="list-group-item">
              Description: <span className="float-right">Dental Work </span>
            </li>
            <li className="list-group-item">
              Amount Due: <span className="float-right">$500.00</span>
            </li>
          </ul>
          <div className="card-body">
            <h6 className="card-title">Renegotiate: </h6>
            {editable ? (
              <div>
                <input
                  type="text"
                  className="form-control"
                  style={{ border: "none", textAlign: "center" }}
                  placeholder="Enter text here"
                  value={renegotiateText}
                  onChange={handleInputChange}
                />
                <a href="#" className="btn btn-primary mt-3" onClick={handleSendClick}>
                  Send
                </a>
              </div>
            ) : (
              <div onClick={handleRenegotiateClick}>{renegotiateText ? renegotiateText : "Click to add text"}</div>
            )}
          </div>
          <div className="card-footer text-muted">20 days left</div>

          <a href="#12E26C" className="btn btn-success btn-bottom mt-3">
            Pay Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoice;
