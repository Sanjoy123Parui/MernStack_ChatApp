import mongoose from "mongoose";
import { userSignupModel } from './userSignup.model.js';

// create user profile schema model
const userProfileSchema = new mongoose.Schema({

    user_name: {
        type: String,
        required: true
    },

    avatar: {
        type: String,
        required: true
    },

    dob: {
        type: String,
        required: true
    },

    abouts: {
        type: String,
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

const userProfileModel = mongoose.model('userprofiles', userProfileSchema);

// export user profile schema model
export { userProfileModel };
console.log('User profile model is worked successfully');