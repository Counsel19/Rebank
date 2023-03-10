import React, { useEffect } from "react";
import { ImUsers } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { useAppContext } from "../context/AppContext";
import { TailSpin } from "react-loader-spinner";
import { MdOutlinePaid } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Cards = () => {
  const {
    currentStats,
    getStats,

    user,
  } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      // await getStats();
    };
    getData();
  }, []);

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <>
        <div className="flex flex-col justify-center p-8 bg-white shadow rounded-lg">
          <div className="flex items-center  gap-6 mb-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full">
              <ImUsers size={24} />
            </div>
            <span className="block text-2xl font-bold">12</span>
          </div>

          <span className="flex text-gray-500">Agents</span>
        </div>

        <div className="flex flex-col justify-center p-8 bg-white shadow rounded-lg">
          <div className="flex items-center  gap-6 mb-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-pink-400 bg-pink-50 rounded-full">
              <HiUsers size={24} />
            </div>
            <span className="inline-block text-2xl font-bold">12</span>
          </div>

          <span className="block text-gray-500">Customers</span>
        </div>

        <div className="flex flex-col justify-center p-8 bg-white shadow rounded-lg">
          <div className="flex items-center  gap-6 mb-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full">
              <GoLocation size={24} />
            </div>
            <span className="block text-2xl font-bold">12</span>
          </div>

          <span className="block text-gray-500">Locations</span>
        </div>

        <div className="flex flex-col justify-center p-8 bg-white shadow rounded-lg">
          <div className="flex items-center  gap-6 mb-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full">
              <MdOutlinePaid size={29} />
            </div>
            <span className="block text-2xl font-bold">12</span>
          </div>

          <span className="block text-gray-500">Total Saved</span>
        </div>
      </>
    </section>
  );
};

export default Cards;
