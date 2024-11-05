import mongoose from "mongoose";
import { userSignupModel } from './userSignup.model.js';
import { userProfileModel } from "./userProfile.model.js";
import { contactModel } from './contact.model.js';

// here can define chat model schema
const chatSchema = new mongoose.Schema({

    sender_phone: {
        type: String,
        unique: true,
        required: true
    },

    sender_name: {
        type: String
    },

    reciever_phone: {
        type: String,
        unique: true,
        required: true
    },

    reciever_name: {
        type: String
    },


    sender_profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userProfileModel,
        required: true
    },

    reciever_profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: contactModel,
        required: true
    },

    contents: [{

        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: userSignupModel,
            required: true,
        },

        reciever: {
            type: mongoose.Schema.Types.ObjectId,
            ref: userSignupModel,
            required: true
        },

        messages: {
            type: String
        },

        // createdAt:{
        //     type:Date,
        //     default:Date.now,
        //     required:true,
        // }

    }]
}, {
    timestamps: true,
    versionKey: false
});

const chatModel = mongoose.model('chats', chatSchema);

// here export chat schema model
export { chatModel };
console.log('Chat model is worked successfully');