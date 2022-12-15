import Transaction from "../models/Transaction.js";
import Customer from "../models/Customer.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const createTransaction = async (req, res) => {
  const { customer, zone, amount } = req.body;

  if (!customer || !zone || !amount) {
    throw new BadRequestError("Please provide all Fields");
  }

  const agent = req.user.userId;

  let transaction = await Transaction.create({ ...req.body, agent });

  res.status(StatusCodes.CREATED).json(transaction);
};

const getAllTransactions = async (req, res) => {
  const { zone, sort, search } = req.query;
  let queryObject = {};

  // ADD BASED ON CONDITIONS
  if (zone && zone !== "all") {
    queryObject.zone = zone;
  }

  if (search) {
    const stringSearchFields = ["zone"];

    const query = {
      $or: [
        ...stringSearchFields.map((field) => ({
          [field]: new RegExp("^" + search, "i"),
        })),
      ],
    };
    queryObject = { ...queryObject, ...query };
  }

  // No AWAIT
  let result = Transaction.find(queryObject);

  // CHAIN CONNDITIONS
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  let transactions = await result;

  const totalTransactions = await Transaction.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalTransactions / limit);

  res.status(StatusCodes.OK).json({
    transactions,
    totalTransactions,
    numOfPages,
  });
};

const getUserZoneTransactions = async (req, res) => {
  const { userId, role } = req.user;
  const { zoneId } = req.query;
  const { id } = req.params;
  let userZoneTransactions;
  if (role === "agent") {
    userZoneTransactions = await Transaction.find({
      agent: userId,
      zone: zoneId,
    });
  } else if (role === "admin") {
    userZoneTransactions = await Transaction.find({
      agent: id,
      zone: zoneId,
    });
  }
  userZoneTransactions = await Promise.all(
    userZoneTransactions.map(async (transaction) => {
      const customer = await Customer.findById(transaction.customer);
      return { ...transaction._doc, customer };
    })
  );

  res.status(StatusCodes.OK).json(userZoneTransactions);
};

export { createTransaction, getAllTransactions, getUserZoneTransactions };
