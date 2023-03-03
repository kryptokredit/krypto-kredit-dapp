import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import InvoiceList from "./InvoiceList";
import PayerInvoiceList from "./PayerInvoiceList";
import Header from "./components/Header";
import InvoiceForm from "./invoiceForm";

const App = () => {
  return (
    <div>
        <Header> </Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/InvoiceForm" element={<InvoiceForm />} />
          <Route exact path="/InvoiceList" element={<InvoiceList />} />
          <Route
            exact
            path="/PayerInvoiceList"
            element={<PayerInvoiceList />}
          />
        </Routes>

    </div>
  );
};

export default App;
