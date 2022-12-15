import { format } from "date-fns";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import SearchInput from "../SearchInput";

const transactions = [
  {
    agentName: "John Doe",
    agentPhone: "+23487658744",
    location: "Obinze, Owerri",
    customer: "Frank John",
    createdAt: new Date(),
    amount: 40000,
  },
  {
    agentName: "John Doe",
    agentPhone: "+23487658744",
    location: "Obinze, Owerri",
    customer: "Frank John",
    createdAt: new Date(),
    amount: 40000,
  },
  {
    agentName: "John Doe",
    agentPhone: "+23487658744",
    location: "Obinze, Owerri",
    customer: "Frank John",
    createdAt: new Date(),
    amount: 40000,
  },
  {
    agentName: "John Doe",
    agentPhone: "+23487658744",
    location: "Obinze, Owerri",
    customer: "Frank John",
    createdAt: new Date(),
    amount: 40000,
  },
];

const AllTransaction = () => {
  return (
    <div className="sm:p-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">All Transaction</h1>
        <h2 className="text-gray-600 ml-0.5">
          List of all current Transaction
        </h2>
      </div>

      <div className="mt-0 overflow-x-auto relative shadow-md sm:rounded-lg bg-white  flex-1">
        <div className="w-1/2 px-6">
          <SearchInput />
        </div>
        {transactions ? (
          <div className="my-0  px-2 py-4">
            <div className="flex items-center justify-between mb-5"></div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-sm text-blue-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="py-5 px-3">
                    S/N
                  </th>
                  <th scope="col" className="py-5 px-3">
                    Agent Name
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Agent Phone
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Customer
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Location
                  </th>
                  <th scope="col" className="py-5 px-3">
                    Amount
                  </th>
                  <th scope="col" className="py-5 px-3">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr className="text-center font-bold text-xl py-4 px-3">
                    <td className="py-4 px-3">No Transaction Yet</td>
                  </tr>
                ) : (
                  transactions.map((item, index) => (
                    <tr key={item.transactionId} className="bg-white border-b">
                      <td className="py-4 px-3">{index + 1}</td>

                      <td className="py-4 px-3">{item.agentName}</td>
                      <td className="py-4 px-3">{item.agentPhone}</td>

                      <td className="py-4 px-3">{item.customer}</td>
                      <td className="py-4 px-3">{item.location}</td>
                      <td className="py-4 px-3">{item.amount}</td>
                      <td className="py-4 px-3">{format(item.createdAt, "MMM, dd")}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <TailSpin />
        )}
      </div>
    </div>
  );
};

export default AllTransaction;
