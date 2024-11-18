import {
    sendChat
} from '../constants/customevents.js';

import { userProfileModel } from '../models/userProfile.model.js';
import { contactModel } from '../models/contact.model.js';



// here define all one-to-one chat events functionality
const postUserChat = (socket, userId) => socket.on(sendChat, async (data) => {

    try {

        // here declare data
        let { reciever_phone, reciever_name, messages } = data;

        // here check userId
        if (!userId) {

            socket.emit(sendChat, "User does not exist");

        }
        else {

            // here check condition for reciever
            if (!(reciever_phone || reciever_name)) {

                socket.emit(sendChat, "Invalid reciever");
            }
            else {

                // here was retrieve user profile data
                let userProfiledata = await userProfileModel.findOne({ usersignup_id: userId })
                    .populate({ path: 'usersignup_id' }).exec();

                // here was retrieve user contact data
                let userContactdata = await contactModel.findOne({
                    contact_phone: reciever_phone,
                    myprofile_id: userProfiledata._id
                }).populate([
                    { path: 'myprofile_id', populate: { path: 'usersignup_id' } },
                    { path: 'contactprofile_id', populate: { path: 'usersignup_id' } }
                ]).exec();


                // check the condition is user contactdata
                if (!userContactdata) {
                    socket.emit(sendChat, "Contact was wrong");
                }
                else {

                    // here was retrieve data of sender and reciever
                    let sender = userProfiledata.usersignup_id._id;
                    let senderPhone = userContactdata.myprofile_id.usersignup_id.phone;
                    let senderName = "You";
                    let reciever = userContactdata.contactprofile_id.usersignup_id._id;

                    let data = {
                        sender: sender,
                        sender_phone: senderPhone,
                        sender_name: senderName,
                        reciever: reciever,
                        reciever_phone: reciever_phone,
                        reciever_name: reciever_name,
                        messages: messages
                    };

                    let msg = await data.messages;

                    console.log({ messages: msg });

                    socket.emit(sendChat, { messages: msg });




                }

            }

        }

    }
    catch (error) {

        socket.emit(SEND_CHAT, `Internal server error : ${error}`);
    }

});


// export all one-to-one chat events
export {
    postUserChat
};