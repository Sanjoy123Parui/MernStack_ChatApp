import mongoose from "mongoose";
import { adminSignupModel } from './adminSignup.model.js';

// create admin profile model schema
const adminProfileSchema = new mongoose.Schema({

    admin_name: {
        type: String,
        required: true
    },

    admin_profileimg: {
        type: String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    dob: {
        type: String,
        required: true
    },

    abouts: {
        type: String,
        required: true
    },

    adminsignup_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: adminSignupModel,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
});

const adminProfileModel = mongoose.model('adminprofiles', adminProfileSchema);

// export admin profile model schema
export { adminProfileModel };