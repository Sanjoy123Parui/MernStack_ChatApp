import mongoose from "mongoose";
import { userSignupModel } from './userSignup.model.js';
import { userProfileModel } from './userProfile.model.js';
import { contactModel } from './contact.model.js';

// here define chat model schema
const chatSchema = new mongoose.Schema({

    usersignup_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userSignupModel,
        required: true
    },

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userProfileModel,
        required: true
    },

    sender_phone:{
        type:String,
        unique:true,
        required:true
    },

    sender_name:{
        type:String,
    },

    reciver_phone:{
        type:String,
        unique:true,
        required:true
    },

    reciver_name:{
        type:String,
    },

    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: contactModel,
        required: true
    },

    contents: [{

        message: {
            type: String
        },

        attachments: {
            type: String
        },

        voices: {
            type: String
        },

        createdAt: {
            type: Date,
            default: Date.now
        }

    }]

}, {
    timestamps: true,
    versionKey: false
});

const chatModel = mongoose.model('chats', chatSchema);

// export chat model schema
export { chatModel };
console.log('Chat model is worked successfully');