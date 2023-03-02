import { Navbar, Nav, Dropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="https://media.discordapp.net/attachments/997261020609384458/1080730722769305730/Logo_tree__1_-removebg-preview.png"
          alt="Logo"
          style={{ width: "250px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
        <Nav className="mr-auto">
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Invoicer</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/InvoiceList">My Invoices</Dropdown.Item>
              <Dropdown.Item href="/InvoiceForm">
                Create an Invoice
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Payer</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/PayerInvoiceList">
                My Invoices
              </Dropdown.Item>
              <Dropdown.Item href="/">My Dashboard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item>
            <button
              style={{ marginRight: "15px", backgroundColor: "#12E26C" }}
              className="btn"
            >
              Connect
            </button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
