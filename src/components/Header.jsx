import React from "react";
import { Typography, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  const invoiceMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/invoiceList">My Invoices</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/invoiceForm">Create an Invoice</Link>
      </Menu.Item>
    </Menu>
  );

  const payerMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/payer/invoiceList">My Invoices</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "start" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Title level={4} style={{ margin: "0 0.5rem 0 0" }}>
            <span
              style={{
                background: "linear-gradient(to right, #00bfff, #32cd32)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              KryptoKredit
            </span>
          </Title>
        </Link>
      </div>
      <Dropdown overlay={invoiceMenu}>
        <a href="#" style={{ color: "white", textDecoration: "none", marginRight: "1rem" }}>
          Invoicer <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={payerMenu}>
        <a href="#" style={{ color: "white", textDecoration: "none", marginRight: "1rem" }}>
          Payer <DownOutlined />
        </a>
      </Dropdown>
      {props.children}
    </div>
  );
}

Header.defaultProps = {
  link: "",
  title: "KryptoKredit",
};
