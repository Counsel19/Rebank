import { AiOutlineLogout } from "react-icons/ai";
import UserAvatar from ".././assets/img/user.png";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { user } = useAppContext();

  return (
    <div className="flex justify-between bg-white items-center pb-2 py-8 px-6">
      <div className="flex items-center gap-4 ">
        <img src={UserAvatar} alt="User" className="w-8 h-8 object-contain" />
        <span className="font-semibold text-base text-blue-900">
          {user && ` Welcome! ${user.firstname} ${user.lastname}`}
        </span>
      </div>

      <AiOutlineLogout size={22} className="text-rose-400" />
    </div>
  );
};

export default Header;
