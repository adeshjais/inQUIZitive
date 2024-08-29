const mongoose=require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
exports.connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((con)=>console.log(`Database connected :${con.connection.host}`))
    .catch((err)=>console.log(err));
}