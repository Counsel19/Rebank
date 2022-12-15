import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="relative w-full flex gap-4 mt-4">
      <BsSearch
        size={28}
        className="absolute  mt-3 ml-4 text-gray-400"
      />

      <input
        type="text"
        role="search"
        placeholder="Search Customers"
        className="w-full pl-16 pr-4 py-4 rounded-lg font-medium bg-blue-50 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
      />
    </div>
  );
};

export default SearchInput;

<div className="relative w-full mt-4">
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="absolute h-6 w-6 mt-3 ml-2 text-gray-400"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
  <input
    type="text"
    role="search"
    placeholder="Search Customers"
    className="py-2 pl-10 pr-4 w-full border-4 border-transparent bg-blue-50 placeholder-gray-400 focus:bg-white rounded-lg"
  />
</div>;
