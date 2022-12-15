import { GoArrowUp } from "react-icons/go";
import { format } from "date-fns";
import { CustomHeader, SearchInput } from "../components";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const transaction = [
  {
    _id: 1,
    name: "Faith James",
    date: new Date(),
    amount: 25000,
  },
  {
    _id: 2,
    name: "Faith James",
    date: new Date(),
    amount: 25000,
  },
  {
    _id: 3,
    name: "Faith James",
    date: new Date(),
    amount: 25000,
  },
  {
    _id: 4,
    name: "Faith James",
    date: new Date(),
    amount: 25000,
  },
];
const Transactions = () => {
  const {
    userZoneTransactions,
    getUserZoneTransactions,
    user,
  } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      await getUserZoneTransactions();
    };
    getData();
  }, [user]);
  return (
    <div>
      <CustomHeader title="All Transactions" />
      <div className="bg-white py-4 px-6 font-normal">
        <SearchInput />
        <div className="mt-6">
          {userZoneTransactions ? (
            userZoneTransactions.length > 0 ? (
              userZoneTransactions?.map((transaction) => (
                <div
                  key={transaction._id}
                  className="flex justify-between items-center border-b last-of-type:border-b-0  py-4"
                >
                  <div className="flex gap-2 items-center">
                    <div className="px-2 py-2 bg-blue-50 border border-blue-300 rounded flex items-center h-fit">
                      <GoArrowUp size={22} className="text-blue-600" />
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-gray-600 font-semibold">
                        {transaction.customer.firstname}{" "}
                        {transaction.customer.lastname}
                      </span>
                      <span className="text-sm">
                        {format(new Date(transaction.createdAt), "MMM, do")}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold  text-blue-600">
                    +&#8358; {transaction.amount}
                  </span>
                </div>
              ))
            ) : (
              <h3>No Transaction Made Yet</h3>
            )
          ) : (
            <TailSpin />
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
