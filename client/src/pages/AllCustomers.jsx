import React from "react";
import { CustomerList, CustomHeader, SearchInput } from "../components";

const AllCustomers = () => {
  return (
    <div className="">
      <CustomHeader title="Your Customers" />

      <div className="px-6 py-4 flex flex-col gap-4">
       <SearchInput />
        <CustomerList />
      </div>
    </div>
  );
};

export default AllCustomers;
