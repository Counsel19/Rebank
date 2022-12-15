import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
import * as ACTIONS from "./actions";

const AppContext = createContext();

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

export const useAppContext = () => {
  return useContext(AppContext);
};

export const initialState = {
  user: user || null,
  token: token || null,
  currentStats: null,
  customersApplication: null,
  userZoneTransactions: null,
  userCustomers: null,
  zones: null,
  users: null,
  totalStaffs: null,
  numOfPages: 1,
  search: "",
  searchApplication: "",
  isLoading: false,
  successMessage: "",
  errorMessage: "",
  selectedApplication: null,
  selectedPendingApplication: null,
  path: "",
  whoIsLogging: "user",
  showMobileNav: false,
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Instance Setup
  const authFetch = axios.create({
    baseURL: "/api",
  });

  //request Interceptor
  authFetch.interceptors.request.use(
    (config) => {
      dispatch({ type: ACTIONS.FETCH_START });
      config.headers.Authorization = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      dispatch({ type: ACTIONS.FETCH_STOP });
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      dispatch({ type: ACTIONS.FETCH_STOP });
      return response;
    },
    (error) => {
      dispatch({ type: ACTIONS.FETCH_STOP });
      const err = error.response;
      // console.log(err);

      if (err.status === 401 || err.status === 500) {
        // logout();
        dispatch({ type: ACTIONS.INIT_STATE });
      }
      return Promise.reject(error);
    }
  );

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const login = async (payload) => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const res = await axios.post(
        `/api/auth/login?${state.whoIsLogging}=1`,
        payload
      );
      const { customer, token, user } = res.data;

      dispatch({
        type: ACTIONS.LOGIN,
        payload: {
          user: customer || user,
          token,
        },
      });

      addUserToLocalStorage({ user: customer || user, token });
      await getUserZoneTransactions();
      dispatch({ type: ACTIONS.FETCH_STOP });
      return customer || user;
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getUserZoneTransactions = async () => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const { user } = state;

      const res = await authFetch.get(
        `/transactions/${user._id}?zoneId=${user.zone.zoneId}`
      );
      dispatch({
        type: ACTIONS.SET_RECIPIENT_MSG,
        payload: { userZoneTransactions: res.data },
      });

      dispatch({ type: ACTIONS.FETCH_STOP });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });

      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getStats = async () => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const { user } = state;

      dispatch({ type: ACTIONS.FETCH_STOP });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });

      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getUserCustomers = async () => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      const { user } = state;
      const res = await authFetch.get(`/customers/${user.zone.zoneId}`);
      dispatch({
        type: ACTIONS.SET_USER_CUSTOMERS,
        payload: { userCustomers: res.data },
      });

      dispatch({ type: ACTIONS.FETCH_STOP });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });

      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getZones = async () => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });

      const res = await authFetch.get(`/zones`);
      dispatch({
        type: ACTIONS.SET_ZONES,
        payload: { zones: res.data },
      });

      dispatch({ type: ACTIONS.FETCH_STOP });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });

      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const addCustomer = async (payload) => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      console.log("addCustomer")

      const res = await authFetch.post(`/customers`, payload);
      setMessage(" Customer added Successfully");

      dispatch({ type: ACTIONS.FETCH_STOP });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_STOP });

      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const handleFieldChange = (field, value) => {
    dispatch({ type: ACTIONS.HANDLE_CHANGE, payload: { field, value } });
  };

  const updateApplicationState = async (id, attachment) => {
    try {
      dispatch({ type: ACTIONS.FETCH_START });

      const res = await authFetch.patch(`/applications/${id}`, {
        attachment: JSON.stringify(attachment),
      });
      await getStats();

      dispatch({ type: ACTIONS.FETCH_STOP });
      return res.data;
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    removeUserFromLocalStorage();
  };
  const clearMessage = () => {
    dispatch({ type: ACTIONS.CLEAR_MESSAGE });
  };

  const setMessage = (msg) => {
    dispatch({
      type: ACTIONS.SET_SUCCESS,
      payload: { successMessage: msg },
    });

    setTimeout(() => {
      clearMessage();
    }, 5000);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        login,
        getStats,
        logout,
        handleFieldChange,
        clearMessage,
        getUserZoneTransactions,
        getZones,
        getUserCustomers,
        updateApplicationState,
        addCustomer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
