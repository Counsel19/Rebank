import { MdAddLocationAlt } from "react-icons/md";
import Location from "../assets/img/pin.png";

const NewLocation = () => {
  return (
    <div className="p-6">
      <div className="mb-6 ">
        <h1 className="text-3xl font-semibold mb-2">Add Location</h1>
        <h2 className="text-gray-600 ml-0.5">
          Please Fill all Fields Appropriately
        </h2>
      </div>
      <div className=" max-w-md mx-auto px-6 py-4 flex flex-col gap-4">
        <div className="w-full flex items-center justify-center mb-8">
          <img src={Location} alt="User" className="h-24 w-24" />
        </div>
        <input
          className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
          type="text"
          placeholder="Area/Region"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
          type="text"
          placeholder="State"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
          type="email"
          placeholder="Country"
        />

        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <MdAddLocationAlt size={25} />
          <span className="ml-3">Create Location</span>
        </button>
      </div>
    </div>
  );
};

export default NewLocation;
