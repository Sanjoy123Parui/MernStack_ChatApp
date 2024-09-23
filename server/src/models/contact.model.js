import mongoose from "mongoose";
import { userProfileModel } from './userProfile.model.js';
import { userSignupModel } from './userSignup.model.js';

// there are define contact model schema

const contactSchema = new mongoose.Schema({

    contact_phone: {
        type: String,
        unique: true,
        required: true
    },

    contact_name: {
        type: String
    },

    usersignup_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userSignupModel,
        required: true
    },

    userprofile_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userProfileModel,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
});


const contactModel = mongoose.model('contacts', contactSchema);

// there export contact model schema
export { contactModel };
console.log('Contact model is worked successfully');