import User from "../models/userModel/index.js"
import asyncHandler from "../middleWere/asyncHandler.js";
import { generateToken } from "../utills/generateToken.js";

// @access public
// @route POST/api/login  
// @des auth user & get token
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {

        generateToken(res, user._id)


        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid username or password")

    }


})

// @access public
// @route POST/api/users
// @des register User
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }
    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
    res.send("register User")
})

// @access private
// @route POST/api/logout
// @des logout User/clear cookies
const logoutUSer = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({
        message: "Logged Out"
    })
    res.send("Logout User")
})

// @access private
// @route GET/api/profile
// @des get User profile
const getUserProfile = asyncHandler(async (req, res) => {
    
    const user = await User.findById(req.user._id)

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

// @access private
// @route PUT/api/users/updatedProfile
// @des Update User profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  
// @access private
// @route DELETE/api/users/:id
// @des Update User profile
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
// @access private
// @route GET/api/users/:id
// @des Update User profile
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
// @access private
// @route GET/users
// @des Update User profile
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
  res.json(users)
})

// @access private
// @route PUT/users
// @des Update User 
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})



export { getUsers, updateUser, authUser, updateUserProfile, getUserById, deleteUser, logoutUSer, registerUser, getUserProfile }