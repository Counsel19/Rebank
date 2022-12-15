
import express from "express";
const router = express.Router();

import {
  createTransaction,
  getAllTransactions,
  getUserZoneTransactions
} from "../controllers/transactionController.js";

router.route("/").get(getAllTransactions).post(createTransaction);
router.route("/:id").get(getUserZoneTransactions)

export default router;
