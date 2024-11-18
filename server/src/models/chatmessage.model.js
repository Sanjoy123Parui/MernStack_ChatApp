import mongoose from "mongoose";

// here was define chat message model schema
const chatMessageSchema = new mongoose.Schema({

    contents:[{

        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'usersignups',
            required:true
            
        },

        reciever:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'usersignups',
            required:true
        },

        messages:{
            type:String
        },

        chat_type:{
            type:String,
            enum:['text', 'image', 'video', 'audio', 'file'],
            default:'text'
        },

        is_read:{
            type:Boolean,
            default:false
        },

        createdAt:{
            type:Date,
            default:Date.now
        }
    }],

    count:{
        type:Number,
        default:0
    }

}, {

    timestamps: true,
    versionKey: false

});

const chatMessageModel = mongoose.model('chatmessages', chatMessageSchema);

// here export chat message model schema
export { chatMessageModel };