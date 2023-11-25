import { admin, protect } from "../middleWere/authHandler.js";
import { getUsers, updateUser, authUser, updateUserProfile, getUserById, deleteUser, logoutUSer, registerUser, getUserProfile } from "../controller/userController.js";

import express from "express";

const router = express.Router()

router.route("/").post(registerUser).get(protect,  getUsers)
router.post('/logout', logoutUSer)
router.post('/auth', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, deleteUser).get(protect,  getUserById).put(protect, updateUser)


export default router