import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useDynamicContext } from "@dynamic-labs/sdk-react";
import React from "react";

function Header() {
  const {
    user,
    isAuthenticated,
    primaryWallet,
    handleLogOut,
    connectedWallets,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
  } = useDynamicContext();
  const [balance, setBalance] = React.useState(null);
  const [addressWallet, setAddressWallet] = React.useState("");

  async function handleWallet() {
    setAddressWallet(await walletConnector.fetchPublicAddress());
  }

  React.useEffect(() => {
    if (user && walletConnector) {
      const provider = walletConnector.getWeb3Provider();
      handleWallet();
      provider.getBalance(user.walletPublicKey).then((balance) => {
        setBalance(balance.toString());
      });
    }
  }, [user, walletConnector]);

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
            <Dropdown.Toggle as={Nav.Link} style={{ marginRight: "15px" }}>
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
            <Dropdown.Toggle as={Nav.Link} style={{ marginRight: "15px" }}>
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
                fontSize: "12px" /* adjust the font size as needed */,
                fontWeight: "bold",
                color:
                  "#fff" /* set the font color to contrast with the background color */,
                backgroundColor: "#12E26C",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                transition: "all 0.3s ease-in-out",
                marginRight: "15px",
              }}
              onClick={() => {
                console.log("isAuthenticated", isAuthenticated);
                console.log("addressWallet", addressWallet);
                setShowAuthFlow(true);
              }}
            >
              {isAuthenticated
                ? addressWallet.slice(0, 6) +
                  "..." +
                  addressWallet.slice(39, 42)
                : "Connect"}
            </button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
