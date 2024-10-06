import mongoose from "mongoose";
import { userProfileModel } from './userProfile.model.js';
import { userSignupModel } from './userSignup.model.js';

// here are define contact model schema
const contactSchema = new mongoose.Schema({

    contact_name: {
        type: String,
    },

    contact_phone: {
        type: String,
        unique: true,
        required: true
    },

    userprofile_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userProfileModel,
        required: true
    },

    usersignup_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userSignupModel,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
});

const contactModel = mongoose.model('contacts', contactSchema);

// export contact model schema
export { contactModel };
console.log('Contact model is worked successfully');