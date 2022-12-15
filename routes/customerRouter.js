import express from "express";
const router = express.Router();

import {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  getUserZoneCustomers
} from "../controllers/customersController.js";

router.route("/").post(createCustomer).get(getAllCustomers);
router.route("/:id").get(getUserZoneCustomers).patch(updateCustomer).delete(deleteCustomer);

export default router;
