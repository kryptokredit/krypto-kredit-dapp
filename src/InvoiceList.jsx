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
//       backgroundColor: "rgba(255, 255, 0, 0.5)",
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

function InvoiceList() {
  // const { loading, error, data } = useQuery(INVOICE_CREATEDS_QUERY);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  const [data, setData] = useState(allData);
  const [selectedStatus, setSelectedStatus] = useState("all");
  // const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [columns, setColumns] = useState(allColumns);
  const [isHovering, setIsHovering] = useState(false);

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
      <h1 style={{ textAlign: "center", color: "black" }}>My Invoices</h1>
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
            style={{ backgroundColor: "#4E4FE9", color: "white" }}
            className={`btn  me-2 ${selectedStatus === "paid" ? "active" : ""}`}
          >
            Paid
          </button>
          <button
            onClick={() => filterData("unpaid")}
            style={{ backgroundColor: "#4E4FE9", color: "white" }}
            className={`btn  me-2 ${
              selectedStatus === "unpaid" ? "active" : ""
            }`}
          >
            Unpaid
          </button>
          <button
            onClick={() => filterData("outstanding")}
            style={{ backgroundColor: "#4E4FE9", color: "white" }}
            className={`btn me-2 ${
              selectedStatus === "outstanding" ? "active" : ""
            }`}
          >
            Outstanding
          </button>
          <button
            onClick={() => filterData("all")}
            style={{
              backgroundColor: "#4E4FE9",
              color: "white",
            }}
            className={`btn btn-success ${
              selectedStatus === "all" ? "active" : ""
            }`}
          >
            All
          </button>
        </div>
        <div style={{ border: "3px solid #000080", borderRadius: "20px" }}>
          <DataTable columns={columns} data={data} />
        </div>

        <Link to="/invoiceForm" style={{ textDecoration: "none" }}>
          <button
            type="button"
            className="btn"
            style={{
              position: "absolute",
              backgroundColor: "#4E4FE9",
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
              opacity: isHovering ? 0.8 : 1,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            + Create an Invoice
          </button>
        </Link>
      </div>
    </div>
  );
}

export default InvoiceList;
