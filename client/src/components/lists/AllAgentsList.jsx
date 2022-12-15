import React from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput";

const agents = [
  {
    firstname: "James",
    lastname: "Fred",
    email: "Fred@gmail.com",
    location: "Obinze",
    phone: "+23488373733",
    stateCountry: "Imo, Nigeria",
    totalCollected: "2000",
  },
  {
    firstname: "James",
    lastname: "Fred",
    email: "Fred@gmail.com",
    location: "Obinze",
    totalCollected: "2000",
  },
  {
    firstname: "James",
    lastname: "Fred",
    email: "Fred@gmail.com",
    location: "Obinze",
    phone: "+23488373733",
    stateCountry: "Imo, Nigeria",
    totalCollected: "2000",
  },
  {
    firstname: "James",
    lastname: "Fred",
    email: "Fred@gmail.com",
    location: "Obinze",
    phone: "+23488373733",
    stateCountry: "Imo, Nigeria",
    totalCollected: "2000",
  },
  {
    firstname: "James",
    lastname: "Fred",
    email: "Fred@gmail.com",
    location: "Obinze",
    phone: "+23488373733",
    stateCountry: "Imo, Nigeria",
    totalCollected: "2000",
  },
];

const AllAgentsList = () => {
  return (
    <div className="sm:p-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">All Agents</h1>
        <h2 className="text-gray-600 ml-0.5">
          List of all current registered Agents
        </h2>
      </div>

      <div className="mt-0 overflow-x-auto relative shadow-md sm:rounded-lg bg-white  flex-1">
        <div className="w-1/2 px-6">
          <SearchInput />
        </div>
        {agents ? (
          <div className="my-0  px-2 py-4">
            <div className="flex items-center justify-between mb-5"></div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-sm text-blue-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="py-5 px-3">
                    S/N
                  </th>
                  <th scope="col" className="py-5 px-3">
                    First Name
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Last Name
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Email
                  </th>

                  <th scope="col" className="py-5 px-3">
                    Phone
                  </th>

                  <th scope="col" className="py-5 px-3">
                    State/Country
                  </th>
                  <th scope="col" className="py-5 px-3">
                    Location
                  </th>
                  <th scope="col" className="py-5 px-3">
                    Total Collected
                  </th>
                  <th scope="col" className="py-5 px-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {agents.length === 0 ? (
                  <tr className="text-center font-bold text-xl py-4 px-3">
                    <td className="py-4 px-3">No Agents Yet</td>
                  </tr>
                ) : (
                  agents.map((item, index) => (
                    <tr key={item.transactionId} className="bg-white border-b">
                      <td className="py-4 px-3">{index + 1}</td>

                      <td className="py-4 px-3">{item.firstname}</td>
                      <td className="py-4 px-3">{item.lastname}</td>

                      <td className="py-4 px-3">{item.email}</td>
                      <td className="py-4 px-3">{item.state}</td>
                      <td className="py-4 px-3">{item.location}</td>
                      <td className="py-4 px-3">{item.totalCollected}</td>
                      <td className="py-4 px-3">
                        <Link
                          to={`/admin/agents/${item._id}`}
                          className="mr-2 font-medium bg-white text-blue-900 p-1 rounded border border-blue-900 hover:underline"
                        >
                          Details
                        </Link>
                      </td>
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

export default AllAgentsList;
