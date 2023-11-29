import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getOrders,
    updateOrderToDelivered
} from "../controller/orderController.js";
import { admin, protect } from "../middleWere/authHandler.js";

import express from "express";
const router = express.Router()


router.route('/').post(protect, addOrderItems).get(protect, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect,  updateOrderToDelivered)
router.route('/:id').get(protect,  getOrderById)

export default router   
