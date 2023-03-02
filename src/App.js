import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import MyInvoices from "./InvoiceList";
import CreateInvoice from "./invoiceForm";
import InvoiceList from "./PayerInvoiceList"

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myInvoices" element={<MyInvoices />} />
        <Route exact path="/createInvoice" element={<CreateInvoice />} />
        <Route exact path="/payerList" element={<InvoiceList />} />
      </Routes>
    </div>
  );
};

export default App;
