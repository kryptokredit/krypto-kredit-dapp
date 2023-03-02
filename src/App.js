import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import MyInvoices from "./InvoiceList";
import CreateInvoice from "./invoiceForm";

const App = () => {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/myInvoices" component={MyInvoices} />
        <Route exact path="/createInvoice" component={CreateInvoice} />
      </Router>
  );
};

export default App;
