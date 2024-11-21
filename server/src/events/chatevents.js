import {
    sendChat
} from '../constants/customevents.js';

import { userSignupModel } from '../models/userSignup.model.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { userSocketIds } from '../connections/socketconnection.js';




// here define all one-to-one chat events functionality
const sendUserChat = (socket, userId, chatNameSpace) => socket.on(sendChat, async (data) => {

    try {

        // here was declare payload data
        let { reciever_phone, reciever_name, messages } = data;

        // here check condition of userId
        if (!userId) {

            socket.on(sendChat, "User has not logged in");

        }
        else {

            // check condition for reciever name or phone
            if (!(reciever_phone || reciever_name)) {

                socket.emit(sendChat, "Please required the reciever name or phone");

            }
            else {

                // here was retrive sender data from database
                let senderInfo = await userProfileModel.findOne({ userSignup: userId }).populate({
                    path: 'userSignup'
                }).exec();

                let sender = senderInfo.userSignup._id;
                let senderProfile = senderInfo._id;
                let senderPhone = senderInfo.userSignup.phone;
                let senderName = "You";

                // here was retrieve reciever data from database
                let signupId = await userSignupModel.findOne({ phone: reciever_phone }).exec();
                let recieverInfo = await userProfileModel.findOne({ userSignup: signupId._id }).populate({
                    path: 'userSignup'
                }).exec();

                let reciever = recieverInfo.userSignup._id;
                let recieverProfile = recieverInfo._id;


                // here can check reciever phone
                if (reciever_phone !== recieverInfo.userSignup.phone) {

                    socket.emit(sendChat, "Reciever phone are not found");

                }
                else {

                   

                    let data = {
                        sender: sender,
                        senderProfile: senderProfile,
                        sender_phone: senderPhone,
                        sender_name: senderName,
                        reciever: reciever,
                        recieverProfile: recieverProfile,
                        reciever_phone: reciever_phone,
                        reciever_name: reciever_name
                    };

                    console.log({ data,  messages });
                    socket.emit(sendChat, { data,  messages });

                }
            }

        }

    }
    catch (error) {

        socket.emit(sendChat, `Internal server error : ${error}`);
    }

});


// export all one-to-one chat events
export {
    sendUserChat
};