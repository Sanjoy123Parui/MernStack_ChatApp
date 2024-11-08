import mongoose from "mongoose";

// create there admin signup model schema
const adminSignupSchema = new mongoose.Schema({

    country: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    refresh_adminToken: {
        type: String
    }

}, {

    timestamps: true,
    versionKey: false
    
});

const adminSignupModel = mongoose.model('adminsignups', adminSignupSchema);

// export admin signup model schema
export { adminSignupModel };