import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import PayerInvoiceList from "./PayerInvoiceList";
import InvoiceList from "./InvoiceList";
import Header from "./components/Header";
import InvoiceForm from "./invoiceForm";

const App = () => {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/InvoiceList" element={<InvoiceList />} />
        <Route exact path="/InvoiceForm" element={<InvoiceForm />} />
        <Route exact path="/payerInvoiceList" element={<PayerInvoiceList />} />
      </Routes>
    </div>
  );
};

export default App;
