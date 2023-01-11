import mongoose from "mongoose";

const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.og8ncz2.mongodb.net/CRUD-APP?retryWrites=true&w=majority`;
try{
   await mongoose.connect(URL,{useUnifiedTopology: true , useNewUrlParser: true});
   console.log('database connected');
}catch(error){
 console.log('error while connecting',error);
}

}

export default Connection;