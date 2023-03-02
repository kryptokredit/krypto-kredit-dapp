import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyInvoices from "./InvoiceList";
import CreateInvoice from "./invoiceForm";
import InvoiceList from "./PayerInvoiceList";
import Header from "./components/Header";
import ViewInvoice from "./ViewInvoice";
import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react";

const App = () => {
  return (
    <div>
      <DynamicContextProvider
        settings={{
          appLogoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Examplelogo.svg",
          appName: "SC",
          environmentId: "d8b4ce53-d95d-4c0a-a1ac-915fb1da42a3",
          onAuthSuccess: ({ authToken, user }) => {
            console.log(
              `Welcome ${user.walletPublicKey} your token is ${authToken}`
            );
            window.location.assign("/success");
          },
        }}
      >
        <Header> </Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/myInvoices" element={<MyInvoices />} />
          <Route exact path="/createInvoice" element={<CreateInvoice />} />
          <Route exact path="/payerList" element={<InvoiceList />} />
          <Route exact path="/ViewInvoice" element={<ViewInvoice />} />
        </Routes>
      </DynamicContextProvider>
    </div>
  );
};

export default App;
