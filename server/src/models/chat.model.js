import mongoose from "mongoose";
import { userSignupModel } from './userSignup.model.js';
import { userProfileModel } from './userProfile.model.js';
import { contactModel } from './contact.model.js';

// here will be define chat schema model
const chatSchema = new mongoose.Schema({

    usersignup_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userSignupModel,
        required: true
    },

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

    contents: [{

        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: userProfileModel,
            required: true
        },

        reciever: {
            type: mongoose.Schema.Types.ObjectId,
            ref: contactModel,
            required: true
        },

        messages: {
            type: String
        },

        chat_type: {
            type: String,
            enum: ['text', 'image', 'video', 'file'],
            default: 'text',
            required: true
        },

        is_read: {
            type: Boolean,
            default: false
        }

    }]

}, {

    timestamps: true,
    versionKey: false

});


const chatModel = mongoose.model('chats', chatSchema);

// here export chat schema model
export { chatModel };
console.log('Chat model is worked successfully');