import { useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Card = () => {
  const { getUserCustomers, userCustomers, user } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      await getUserCustomers();
    };
    getData();
  }, [user]);
  return (
    <div className="flex justify-between items-center px-8 py-6 text-white rounded-xl bg-blue-500">
      <div>
        <span className="font-semibold text-sm">Total Customers</span>
        <h3 className="font-bold text-2xl">{userCustomers?.length}</h3>
      </div>
      <Link to="/agents/add" className="bg-white px-2 py-1 rounded">
        <MdAdd size={28} className="text-blue-500" />
      </Link>
    </div>
  );
};

export default Card;
