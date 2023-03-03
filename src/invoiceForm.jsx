import React, { useState } from "react";

function InvoiceForm() {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ETH");
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  const [payerWalletAddress, setPayerWalletAddress] = useState("");
  const [description, setDescription] = useState("");

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false);
    console.log(`Selected option: ${option}`);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log("Name:", event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
    console.log("DueDate", event.target.value);
  };

  const handlePayerWalletAddressChange = (event) => {
    setPayerWalletAddress(event.target.value);
    console.log("WalletAddress:", event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log("Description:", event.target.value);
  };

  return (
    <div
      className="container px-lg-5 py-4"
      style={{
        border: "2px solid #000080",
        borderRadius: "7px",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h1 style={{ color: "#12E26C" }} className="text-center text-dark mb-4">
        Create an Invoice
      </h1>
      <form>
        <div className="row mb-3">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="form-group my-3">
              <label htmlFor="input1" className="text-dark">
                Name
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                className="form-control"
                id="input1"
                style={{ border: "2px solid #555" }}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="form-group my-3"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                className="text-dark"
                htmlFor="input3"
                style={{ marginBottom: "5px" }}
              >
                Due Date
              </label>
              <input
                style={{ border: "2px solid black", roundedBorder: "5px" }}
                type="date"
                id="input3"
                name="trip-start"
                value={dueDate} // replace hard-coded value with dueDate state value
                min={new Date().toISOString().split("T")[0]} // set min value to current date
                onChange={handleDueDateChange} // handle change in input element
              ></input>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="form-group my-3">
              <label htmlFor="input3" className="text-dark">
                Select Token
              </label>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  id="input3"
                  value={selectedOption}
                  readOnly
                  onClick={toggleOptions}
                  style={{ border: "2px solid #555" }}
                />
                <div className="position-absolute" style={{ top: 3, right: 5 }}>
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={toggleOptions}
                  >
                    &#x25BC;
                  </button>
                </div>
                {optionsVisible && (
                  <div className="position-absolute mt-2 bg-dark p-2">
                    <div
                      className="text-light"
                      onClick={() => selectOption("ETH")}
                    >
                      ETH
                    </div>
                    <div
                      className="text-light"
                      onClick={() => selectOption("Arb")}
                    >
                      Arb
                    </div>
                    <div
                      className="text-light"
                      onClick={() => selectOption("Poly")}
                    >
                      Poly
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group my-3">
              <label htmlFor="input4" className="text-dark">
                Enter Wallet address of payer
              </label>
              <input
                type="text"
                className="form-control"
                id="input4"
                value={payerWalletAddress}
                onChange={handlePayerWalletAddressChange}
                style={{ border: "2px solid #555" }}
                placeholder="Wallet Address"
              />
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div className="row mb-3">
          <div className="col-lg-12">
            <div className="form-group my-3 text-left">
              <label
                htmlFor="input5"
                className="text-dark"
                style={{ color: "black" }}
              >
                Description of Service
              </label>
              <textarea
                className="form-control"
                id="input5"
                value={description}
                onChange={handleDescriptionChange}
                style={{ border: "2px solid #555" }}
                placeholder="Enter a Description"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <button
              className="btn btn-lg "
              style={{ backgroundColor: "#12E26C" }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
