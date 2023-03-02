import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import {
  allColumns,
  outstandingColumns,
  paidColumns,
  unpaidColumns,
} from "./helpers/columns";

// const conditionalRowStyles = [
//   {
//     when: row => row.status === "unpaid",
//     style: row => ({
//       backgroundColor: "yellow",
//     }),
//   },
//   {
//     when: row => row.status === "paid",
//     style: row => ({
//       backgroundColor: "rgba(0, 255, 0, 0.5)",
//     }),
//   },
//   {
//     when: row => row.status === "outstanding",
//     style: row => ({
//       backgroundColor: "rgba(255, 0, 0, 0.5)",
//     }),
//   },
// ];

const customTheme = {
  rows: {
    fontWeight: "bold",
  },
};

const allData = [
  {
    id: 1,
    Name: "Maya",
    Amount: "2 ETH",
    DueDate: "2/30/2025",
    status: "unpaid",
  },
  {
    id: 2,
    Name: "Miguel",
    Amount: "2 ETH",
    DueDate: "2/30/2025",
    status: "paid",
  },
  {
    id: 3,
    Name: "Miguel",
    Amount: "2 ETH",
    DueDate: "2/30/2025",
    status: "unpaid",
  },
  {
    id: 4,
    Name: "Miguel",
    Amount: "2 ETH",
    DueDate: "2/30/2025",
    status: "outstanding",
  },
  {
    id: 5,
    Name: "Miguel",
    Amount: "2 ETH",
    DueDate: "2/30/2025",
    status: "paid",
  },
  {
    id: 6,
    Name: "Miguel",
    Amount: "2 ETH",
    DueDate: "2/30/2025",
    status: "outstanding",
  },
  {
    id: 7,
    Name: "Miguel",
    Amount: "2 ETH",
    DueDate: "2/30/2025",
    status: "unpaid",
  },
];

function PayerInvoiceList() {
  const [data, setData] = useState(allData);
  const [selectedStatus, setSelectedStatus] = useState("all");
  // const [showCheckboxes, setShowCheckboxes] = useState(false);

  const [columns, setColumns] = useState(allColumns);

  const filterData = (status) => {
    if (status === "all") {
      setData(allData);
      setColumns(allColumns);
    } else if (status === "unpaid") {
      setData(allData.filter((item) => item.status === status));

      setColumns(unpaidColumns);
    } else if (status === "paid") {
      setData(allData.filter((item) => item.status === status));

      setColumns(paidColumns);
    } else if (status === "outstanding") {
      setData(allData.filter((item) => item.status === status));

      setColumns(outstandingColumns);
    }
    setSelectedStatus(status);
  };

  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center", color: "black" }}>
        My Invoices(Payer)
      </h1>
      <div
        style={{
          margin: "10vh 5% 5% 5%",
          padding: "20px",
          borderRadius: "10px 10px 0 0",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => filterData("paid")}
            className={`btn btn-success me-2 ${
              selectedStatus === "paid" ? "active" : ""
            }`}
          >
            Paid
          </button>
          <button
            onClick={() => filterData("unpaid")}
            className={`btn btn-success me-2 ${
              selectedStatus === "unpaid" ? "active" : ""
            }`}
          >
            Unpaid
          </button>
          <button
            onClick={() => filterData("outstanding")}
            className={`btn btn-success me-2 ${
              selectedStatus === "outstanding" ? "active" : ""
            }`}
          >
            Outstanding
          </button>
          <button
            onClick={() => filterData("all")}
            className={`btn btn-success ${
              selectedStatus === "all" ? "active" : ""
            }`}
          >
            All
          </button>
        </div>
        <div style={{ border: "3px solid #12E26C", borderRadius: "20px" }}>
          <DataTable columns={columns} customTheme={customTheme} data={data} />
        </div>

        <Link to="/invoiceForm" style={{ textDecoration: "none" }}>
          <button
            type="button"
            className="btn btn-success"
            style={{
              position: "absolute",
              top: "25px",
              right: "20px",
              color: "white",
              fontSize: "15px",
              display: "flex",
              borderRadius: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            + Create an Invoice
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PayerInvoiceList;
