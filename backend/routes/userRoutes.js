import { admin, protect } from "../middleWere/authHandler.js";
import { authUser, deleteUser, getUser, getUserById, logoutUSer, registerUser, updateProfile, updateUser, userProfile } from "../controller/userController.js";

import express from "express";

const router = express.Router()

router.route("/").post(registerUser).get(protect, admin, getUser)
router.post('/logout', logoutUSer)
router.post('/login', authUser)
router.route('/profile').get(protect, userProfile).put(protect, updateProfile)
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)


export default router