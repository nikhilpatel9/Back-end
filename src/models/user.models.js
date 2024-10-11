import mongoose,{Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    username:{
        typeof: 'string',
        required : true,
        unique: true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        typeof: 'string',
        required : true,
        unique: true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        typeof: 'string',
        required : true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String,
        default: "https://res.cloudinary.com/dqzgjwz5i/image",
        required:true,
    },
    coverImage:{
        type:String,
    },
    watchHistory:[
        {
        type :Schema.Types.ObjectId,
         ref: 'Video'
    }],
    password:{
        type:String,
        required:[true,'Password is required'],
    },
    refreshToken:{
        type:String,
        },
    
},{timestamps:true});
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))  return next()
    this.password=bcrypt.hash(this.password,10);
    next();
})
userSchema.method.isPasswordCorrect = async function(password){
    return  await bcrypt.compare(password,this.password);
}
userSchema.method.generateAccessToken= function(){
    const token = jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.method.generateRefreshToken= function(){
    const token = jwt.sign({
        _id:this._id,
       
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
        
}
export const User = mongoose.model("User",userSchema);