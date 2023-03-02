import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyInvoices from "./InvoiceList";
import CreateInvoice from "./invoiceForm";
import InvoiceList from "./PayerInvoiceList";
import Header from "./components/Header";
import ViewInvoice from "./ViewInvoice";

const App = () => {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myInvoices" element={<MyInvoices />} />
        <Route exact path="/createInvoice" element={<CreateInvoice />} />
        <Route exact path="/payerList" element={<InvoiceList />} />
        <Route exact path="/ViewInvoice" element={<ViewInvoice />} />
      </Routes>
    </div>
  );
};

export default App;
