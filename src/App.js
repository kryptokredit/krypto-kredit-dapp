import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import InvoiceList from "./InvoiceList";
import PayerInvoiceList from "./PayerInvoiceList";
import Header from "./components/Header";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import InvoiceForm from "./invoiceForm";
import MyDashboard from "./MyDashboard";


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
          <Route exact path="/InvoiceForm" element={<InvoiceForm />} />
          <Route exact path="/InvoiceList" element={<InvoiceList />} />
          <Route exact path="/InvoiceList" element={<InvoiceList />} />
          <Route exact path="/MyDashboard" element={<MyDashboard />} />
          <Route
            exact
            path="/PayerInvoiceList"
            element={<PayerInvoiceList />}
          />
        </Routes>
      </DynamicContextProvider>
    </div>
  );
};

export default App;
