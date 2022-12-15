import User from "../models/User.js";
import Zone from "../models/Zone.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  let user = null;
  let token = null;

  const { firstname, lastname, phone, email, password } = req.body;

  if (!firstname || !lastname || !phone || !email || !password) {
    throw new BadRequestError("Please provide all fields");
  }

  const userAlreadyExist = await User.findOne({ email });

  if (userAlreadyExist) {
    throw new BadRequestError("Email Already in use");
  }

  user = await User.create(req.body);
  token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = async (req, res) => {
  let user = null;
  let token = null;

  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please Provide all Values");
  }

  user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Email not registerd");
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid password");
  }
  token = user.createJWT();
  user.password = undefined;

  const zone = await Zone.findById(user.zone);
  console.log(zone)

  res.status(StatusCodes.OK).json({
    user: {
      ...user._doc,
      zone: {
        zoneId: zone._id,
        name: `${zone.location} ${zone.state}, ${zone.country}`,
      },
    },
    token,
  });
};

export { register, login };
