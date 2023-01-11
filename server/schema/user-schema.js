import mongoose from "mongoose";

import autoIncrement from "mongoose-auto-increment";
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    username:String,
    phone:Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;