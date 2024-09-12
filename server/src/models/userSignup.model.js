import mongoose from "mongoose";

// create user model schema
const userSignupSchema = new mongoose.Schema({

    // country
    country: {
        type: String,
        required: true
    },

    // phone number
    phone: {
        type: String,
        unique: true,
        required: true
    },

    // password
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
});

const userSignupModel = mongoose.model('usersignups', userSignupSchema);

// export user signup Model schema
export { userSignupModel };
console.log('User signup model is worked successfully');
