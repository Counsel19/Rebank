import { Link } from "react-router-dom";
import BannerImg from "../assets/img/invest.svg";
import { useAppContext } from "../context/AppContext";

const Landing = () => {
  const { handleFieldChange } = useAppContext();
  return (
    <div>
      <section className="bg-gray-50 text-gray-800 px-12">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={BannerImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-6xl">
              A Better and <span className="text-violet-400">Simpified</span>{" "}
              way to
              <span className="text-violet-400"> Efficient </span>
              Savings
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              A mordern way to savings with
              <br className="hidden md:inline lg:hidden" />
              Suitable for all Business types
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                onClick={() => handleFieldChange("whoIsLogging", "customer")}
                rel="noopener noreferrer"
                to="/login"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-white"
              >
                Customers
              </Link>
              <Link
                onClick={() => handleFieldChange("whoIsLogging", "user")}
                rel="noopener noreferrer"
                to="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-400"
              >
                Agents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
