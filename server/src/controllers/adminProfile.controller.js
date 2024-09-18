import { adminProfileModel } from '../models/adminProfile.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';


// there are define all admin profile controllers here

// admin profile create controller
const adminNewprofile = TryCatch(async (req, res, next) => {

    // there are declare payload of body
    let adminsignup_id = req.admin;
    let { admin_name, dob, abouts } = req.body;

    // there are create profile and data can save into the database
    let adminProfiledata = await adminProfileModel.findOneAndUpdate({
        adminsignup_id
    },{
        admin_name,
        dob,
        abouts
    },{
        upsert:true,
        new:true,
        setDefaultsOnInsert:true
    });

    // check condition to check admin profile data are insert or not
    if(!adminProfiledata){
        return next(errorHandler("Admin profile are not created", 404));
    }
    else{
        return res.status(201).send({msg:"Profile are created successfully"});
    }

});



// there admin own profile read
const adminViewprofile = TryCatch(async(req, res, next)=>{

    // there are declare payload of params
    let adminprofile_id = req.params.adminprofile_id;

    // there can check findn the data
    let existAdmin = await adminProfileModel.findById(adminprofile_id).populate({
        'path':'adminsignup_id'
    }).exec();

    // there was check existAdmin
    if(!existAdmin){
        return next(errorHandler("Admin data are not found"));
    }
    else{
        return res.status(200).json({data:{
            'admin_name':existAdmin.admin_name,
            'dob':existAdmin.dob,
            'abouts':existAdmin.abouts,
            'phone':existAdmin.adminsignup_id.phone
        }});
    }

});


// there view all admin data
const viewAlladmin = TryCatch(async(req, res, next)=>{

    // there was find all data
    let adminProfiledata = await adminProfileModel.find({}).populate({
        'path':'adminsignup_id'
    }).exec();

    return res.status(200).json({data:adminProfiledata});

});


// export there admin profile all controllers operation
export { adminNewprofile, adminViewprofile, viewAlladmin };
console.log('Admin profile controller is worked successfully');