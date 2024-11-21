import mongoose from "mongoose";

// here was define chat model schema
const chatSchema = new mongoose.Schema({

    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersignups',
        required: true
    }],

    participantsProfile: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userprofiles',
        required: true
    }],

    sender_phone: {
        type: String,
        unique: true,
        required: true,
    },

    sender_name: {
        type: String,
        default: ''
    },

    reciever_phone: {
        type: String,
        unique: true,
        required: true,
    },

    reciever_name: {
        type: String,
        default: ''
    },

    contents: [{

        chatMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'chatmessages',
            default: []
        },

        messageCount: {
            type: Number,
            default: 0
        }
    }],

    chatCount: {
        type: Number,
        default: 0
    }

}, {

    timestamps: true,
    versionKey: false

});

const chatModel = mongoose.model('chats', chatSchema);

// here was expot chat model schema
export { chatModel };