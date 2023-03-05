export const allColumns = [
  {
    name: <span style={{ fontWeight: "bold" }}>Name</span>,
    selector: "Name",
  },
  {
    name: <span style={{ fontWeight: "bold" }}>Amount</span>,
    selector: "Amount",
  },
  {
    name: <span style={{ fontWeight: "bold" }}>Due Date</span>,
    selector: "DueDate",
  },
  {
    name: <span style={{ fontWeight: "bold" }}>Status</span>,
    selector: "status",
    cell: (row) => (
      <button
        className="btn"
        disabled
        style={{
          width: "120px",
          height: "auto",
          alignItems: "center",
          backgroundColor:
            row.status === "unpaid"
              ? "yellow"
              : row.status === "outstanding"
              ? "red"
              : "green",
        }}
      >
        {row.status}
      </button>
    ),
  },
  {
    name: <span style={{ fontWeight: "bold" }}>View invoice</span>,
    selector: "view",
    cell: (row) => (
      <button
        className="btn btn-primary"
        onClick={() => console.log(`Sell ${row.id}`)}
        style={{ width: "120px", height: "auto" }}
      >
        View invoice
      </button>
    ),
  },
];

export const unpaidColumns = [
  { name: <span style={{ fontWeight: "bold" }}>Name</span>, selector: "Name" },
  {
    name: <span style={{ fontWeight: "bold" }}>Amount</span>,
    selector: "Amount",
  },
  {
    name: <span style={{ fontWeight: "bold" }}>Due Date</span>,
    selector: "DueDate",
  },

  {
    name: <span style={{ fontWeight: "bold" }}>Pay</span>,
    selector: "pay",
    cell: (row) => (
      <button
        className="btn btn-success btn-sm"
        onClick={() => console.log(`Pay ${row.id}`)}
      >
        Pay
      </button>
    ),
  },
  {
    name: <span style={{ fontWeight: "bold" }}>Renegotiate</span>,
    cell: (row) => (
      <button
        className="btn btn-primary btn-sm"
        onClick={() => console.log(`Borrow ${row.id}`)}
      >
        Renegotiate
      </button>
    ),
  },
];

export const paidColumns = [
  { name: <span style={{ fontWeight: "bold" }}>Name</span>, selector: "Name" },
  {
    name: <span style={{ fontWeight: "bold" }}>Amount</span>,
    selector: "Amount",
  },
  {
    name: <span style={{ fontWeight: "bold" }}>Due Date</span>,
    selector: "DueDate",
  },
];

export const outstandingColumns = [
  { name: <span style={{ fontWeight: "bold" }}>Name</span>, selector: "Name" },
  {
    name: <span style={{ fontWeight: "bold" }}>Amount</span>,
    selector: "Amount",
  },
  {
    name: <span style={{ fontWeight: "bold" }}>Due Date</span>,
    selector: "DueDate",
  },

  {
    name: <span style={{ fontWeight: "bold" }}>Pay</span>,
    cell: (row) => (
      <button
        className="btn btn-success btn-sm"
        onClick={() => console.log(`Pay ${row.id}`)}
      >
        Pay
      </button>
    ),
  },

  {
    name: <span style={{ fontWeight: "bold" }}>Renegotiate</span>,
    cell: (row) => (
      <button
        className="btn btn-primary btn-sm"
        onClick={() => console.log(`Renegotiate ${row.id}`)}
      >
        Renegotiate
      </button>
    ),
  },
];
