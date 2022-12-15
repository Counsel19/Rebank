import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllAgentsList, AllCustomersList, AllTransaction } from "./components/lists";
import { AdminSharedLayout, SharedLayout } from "./components/sharedLayout";
import { useAppContext } from "./context/AppContext";
import {
  Login,
  AdminDashboard,
  Home,
  Landing,
  AllCustomers,
  AgentsAddCustomer,
  Transactions,
  NewAgent,
  NewLocation,
} from "./pages";

function App() {
  const { user, handleFieldChange } = useAppContext();

  useEffect(() => {
    if (user && user.role === "agent") {
      handleFieldChange("path", user.role + "s");
    } else if (user && user.role === "customer") {
      handleFieldChange("path", "customers");
    } else if (user && user.role === "admin") {
      handleFieldChange("path", "admins");
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agents" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<AllCustomers />} />
          <Route path="add" element={<AgentsAddCustomer />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
        <Route path="/customers" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminSharedLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="customers" element={<AllCustomersList />} />
          <Route path="agents" element={<AllAgentsList />} />
          <Route path="transactions" element={<AllTransaction />} />
          <Route path="add-agent" element={<NewAgent />} />
          <Route path="add-location" element={<NewLocation />} />
        </Route>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
