import { Navbar, Nav, Dropdown } from "react-bootstrap";
import React from "react";
import MetaMaskSDK from "@metamask/sdk";
function Header() {
  const [sdk, setSdk] = React.useState(null);

  const [account, setAccount] = React.useState(null);

  async function connect() {
    if (!sdk) {
      const options = {
        // add any desired options here
      };
      const newSdk = new MetaMaskSDK(options);
      setSdk(newSdk);
    }

    try {
      const accounts = await sdk.request({ method: "eth_requestAccounts" });
      console.log("Connected with MetaMask!", accounts);
      setAccount(accounts[0]);
      // do any necessary state updates or API calls here
    } catch (error) {
      console.error("MetaMask connection error:", error);
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="/KryptoKreditLogo.png"
          alt="Logo"
          style={{ width: "200px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
        <Nav className="mr-auto">
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle
              as={Nav.Link}
              style={{
                marginRight: "15px",
                color: "#555",
                transition: "all 0.3s ease-in-out",
              }}
              activeStyle={{
                backgroundColor: "#eee",
                color: "#12E26C",
                fontWeight: "bold",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#12E26C";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#555";
              }}
            >
              Invoicer
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/InvoiceList">My Invoices</Dropdown.Item>
              <Dropdown.Item href="/InvoiceForm">
                Create an Invoice
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle
              as={Nav.Link}
              style={{
                marginRight: "15px",
                color: "#555",

                transition: "all 0.3s ease-in-out",
              }}
              activeStyle={{
                backgroundColor: "#eee",
                color: "#12E26C",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#12E26C";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#555";
              }}
            >
              Payer
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/PayerInvoiceList">
                My Invoices
              </Dropdown.Item>
              <Dropdown.Item href="/MyDashboard">My Dashboard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item>
            <button
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#12E26C",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                transition: "all 0.3s ease-in-out",
                marginRight: "15px",
              }}
              onClick={() => {
                connect();
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0EAC5B";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#12E26C";
              }}
            >
              {account ? `${account}` : "Connect"}
            </button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
