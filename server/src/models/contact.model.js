import mongoose from "mongoose";
import { userProfileModel } from './userProfile.model.js';

// there create contact model schema

const contactSchema = new mongoose.Schema({

    contact_phone:{
        type:String,
        unique:true,
        required:true,
    },

    contact_name:{
        type:String
    },

    userprofile_id:{
        type:String,
        ref:userProfileModel,
        required:true
    }

}, {
    timestamps: true,
    versionKey: false
});

const contactModel = mongoose.model('contacts', contactSchema);

// export contact model schema
export { contactModel };
console.log('Contact model is worked successfully');