import mongoose from "mongoose";
import { userSignupModel } from './userSignup.model.js';

// here was define chat message model schema
const chatMessageSchema = new mongoose.Schema({

    contents:[{

        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:userSignupModel,
            required:true
        },

        reciever:{
            type:mongoose.Schema.Types.ObjectId,
            ref:userSignupModel,
            required:true
        },

        messages:{
            type:String
        }
    }]


}, {

    timestamps: true,
    versionKey: false

});

const chatMessageModel = mongoose.model('chatmessages', chatMessageSchema);

// here export chat message model schema
export { chatMessageModel };