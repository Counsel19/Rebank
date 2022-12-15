import UserAvatar from "../assets/img/user.png";

const NewAgent = () => {
  return (
    <div className="p-6">
      <div className="mb-6 ">
        <h1 className="text-3xl font-semibold mb-2">Add Agents</h1>
        <h2 className="text-gray-600 ml-0.5">
          Please Fill all Fields Appropriately
        </h2>
      </div>
      <div className=" max-w-md mx-auto px-6 py-4 flex flex-col gap-4">
        <div className="w-full flex items-center justify-center mb-8">
          <img src={UserAvatar} alt="User" className="h-24 w-24" />
        </div>
        <input
          className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
          type="password"
          placeholder="Password"
        />
        <select className="w-full px-8 py-4 rounded-lg font-medium border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-600 focus:bg-white">
          <option vlaue="">Obinze</option>
          <option vlaue="">Lagos</option>
        </select>
        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">Create User</span>
        </button>
      </div>
    </div>
  );
};

export default NewAgent;
