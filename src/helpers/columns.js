export const allColumns = [
  {
    name: "Name",
    selector: "Name",
  },
  { name: "Amount", selector: "Amount" },
  { name: "Due Date", selector: "DueDate" },
  {
    name: "Status",
    selector: "status",
    cell: row => (
      <button
        className="btn"
        disabled
        style={{
          width: "120px",
          height: "auto",
          alignItems: "center",
          backgroundColor: row.status === "unpaid" ? "yellow" : row.status === "outstanding" ? "red" : "green",
        }}
      >
        {row.status}
      </button>
    ),
  },
  {
    name: "View invoice",
    selector: "view",
    cell: row => (
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
  { name: "Name", selector: "Name" },
  { name: "Amount", selector: "Amount" },
  { name: "Due Date", selector: "DueDate" },

  {
    name: "Sell",
    selector: "Sell",
    cell: row => (
      <button className="btn btn-success btn-sm" onClick={() => console.log(`Sell ${row.id}`)}>
        Sell
      </button>
    ),
  },
  {
    name: "Borrow",
    cell: row => (
      <button className="btn btn-primary btn-sm" onClick={() => console.log(`Borrow ${row.id}`)}>
        Borrow
      </button>
    ),
  },
];

export const paidColumns = [
  { name: "Name", selector: "Name" },
  { name: "Amount", selector: "Amount" },
  { name: "Due Date", selector: "DueDate" },
];

export const outstandingColumns = [
  { name: "Name", selector: "Name" },
  { name: "Amount", selector: "Amount" },
  { name: "Due Date", selector: "DueDate" },
];
