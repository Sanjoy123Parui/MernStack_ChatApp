import mongoose from "mongoose";

// here are define contact model schema
const contactSchema = new mongoose.Schema({

    contact_phone: {
        type: String,
        unique: true,
        required: true
    },

    contact_name: {
        type: String,
        required: true
    },

    contactProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userprofiles',
        required: true
    },

    myProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userprofiles',
        required: true
    }

}, {

    timestamps: true,
    versionKey: false

});


const contactModel = mongoose.model('contacts', contactSchema);

// export contact model schema
export { contactModel };