import mongoose from "mongoose";
import { userSignupModel } from './userSignup.model.js';
import { contactModel } from './contact.model.js';

// here was define chat model schema
const chatSchema = new mongoose.Schema({

    participants: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:userSignupModel,
        required:true
    }],

    contact_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:contactModel,
        required:true
    },

    sender_phone:{
        type:String,
        unique:true,
        required:true,
    },

    sender_name:{
        type:String,
        default:''
    },

    reciever_phone:{
        type:String,
        unique:true,
        required:true,
    },

    reciever_name:{
        type:String,
        default:''
    }

}, {

    timestamps: true,
    versionKey: false

});

const chatModel = mongoose.model('chats', chatSchema);

// here was expot chat model schema
export { chatModel };