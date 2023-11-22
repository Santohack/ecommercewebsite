import bcrypt from 'bcryptjs'
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
})


UserSchema.methods.matchPasswords = async function(enteredPasswords) {
    return await bcrypt.compare(enteredPasswords, this.password)
}
UserSchema.pre('save' ,async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
this.password = await bcrypt.hash(this.password, salt)
})



const User =mongoose.model('User',UserSchema)
export default User