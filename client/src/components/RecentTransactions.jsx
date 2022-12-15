import { GoArrowUp } from "react-icons/go";
import { format } from "date-fns";
import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

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
const RecentTransactions = () => {
  const {
    userZoneTransactions,
    user,
    getUserZoneTransactions,
  } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      await getUserZoneTransactions();
    };

    getData();
  }, [user]);

  return (
    <div className="bg-white p-4 font-normal mb-12">
      <h2 className="mb-3 text-sm font-semibold text-gray-600">
        Recent Transactions
      </h2>
      {userZoneTransactions ? (
        userZoneTransactions.length > 0 ? (
          userZoneTransactions.map((transaction) => (
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
          <h3>No Transaction Recorded</h3>
        )
      ) : (
        <TailSpin />
      )}
    </div>
  );
};

export default RecentTransactions;
