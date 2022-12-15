import { RiHome5Fill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { MdPaid } from "react-icons/md";

const Navbar = () => {
  const { path } = useAppContext()
  return (
    <div className="flex max-w-md mx-auto gap-4 z-50 fixed bottom-0 px-8 w-screen bg-white items-center justify-around py-2">
      <Link to={`/${path}/`} className="flex flex-col  items-center text-blue-700">
        <RiHome5Fill size={22} />
        <span className=" text-xs">Home</span>
      </Link>
      <Link to={`/${path}/list`} className="flex flex-col  items-center text-gray-500">
        <IoMdListBox size={22} />
        <span className="text-xs font-light">Customers</span>
      </Link>
      <Link to={`/${path}/transactions`} className="flex flex-col  items-center text-gray-500">
        <MdPaid size={22} />
        <span className="text-xs">Transactions</span>
      </Link>
      <Link to={`/${path}/add` }className="flex flex-col  items-center text-gray-500">
        <AiOutlineUserAdd size={22} />
        <span className="text-xs">Add</span>
      </Link>
    </div>
  );
};

export default Navbar;
