// here import library packages and modules
import {
    SEND_CHAT
} from '../constants/customevents.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { contactModel } from '../models/contact.model.js';
import { chatModel } from '../models/chat.model.js';


// here define all chat events handler functionality of socket.io


// here define send chat events
const chatSend = (socket, userId) => socket.on(SEND_CHAT, async (data) => {

    try {

        // here declare payload
        let { reciever_phone, reciever_name, messages } = data;

        // here can check user can be authenticate or not
        if (!userId) {

            socket.emit(SEND_CHAT, "User are not authenticated");

        }
        else {

            // check reciver payload data
            if (!(reciever_phone || reciever_name)) {

                socket.emit(SEND_CHAT, "You can send the messages in which reciever");

            }

            else {

                // here can retrieve sender data
                let senderName = "You";
                let senderInfo = await userProfileModel.findOne({
                    usersignup_id: userId
                }).populate({
                    path: 'usersignup_id'
                }).exec();

                // here can retrieve reciever data
                let recieverInfo = await contactModel.findOne({ myprofile_id: senderInfo._id }).populate([
                    { path: 'contactprofile_id', populate: { path: 'usersignup_id' } },
                    { path: 'myprofile_id', populate: { path: 'usersignup_id' } },
                ]).exec();


                // here can check reciever contact
                if (reciever_phone !== recieverInfo.contact_phone && reciever_name === recieverInfo.contact_name) {

                    socket.emit(SEND_CHAT, "This reciever was not found");

                }
                else {

                    // here declare reciever room
                    let recieverRoom = [
                        reciever_phone,
                        recieverInfo._id,
                        recieverInfo.contactprofile_id.usersignup_id._id
                    ].sort().join(",");


                    // here declare send chat data
                    let userChatdata = {
                        sender_phone: senderInfo.usersignup_id.phone,
                        contents: [{
                            sender: userId,
                            messages: messages
                        }]
                    };

                    // here declare chat data was insert or save into the database
                    let chatInfo = await chatModel.findOneAndUpdate({
                        sender_phone: senderInfo.usersignup_id.phone,
                        sender_name: senderName,
                        reciever_phone: recieverInfo.contact_phone,
                        reciever_name: recieverInfo.contact_name || '',
                        sender_profile: senderInfo._id,
                        reciever_profile: recieverInfo._id

                    }, {
                        $push: {
                            contents: [{
                                sender: userId,
                                reciever: recieverInfo.contactprofile_id.usersignup_id._id,
                                messages: messages
                            }]
                        }
                    }, {
                        upsert: true,
                        new: true,
                        setDefaultsOnInsert: true
                    });


                    // here check condition for chat data are save or not into the database
                    if (!chatInfo) {

                        socket.emit(SEND_CHAT, "Chat was wrong cridential");

                    }
                    else {


                        // here was single chat data send
                        let singleChat = await userChatdata;

                        socket.to(recieverRoom).emit(SEND_CHAT, { singleChat });

                    }

                }

            }

        }


    }
    catch (error) {

        socket.emit(SEND_CHAT, `Internal server error : ${error}`);

    }

});


// here export all handles events of chats
export {
    chatSend
};