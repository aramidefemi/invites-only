const Invitees = require('../models/user.model');
const QRCode = require('qrcode');
var os = require('os');

const cloudinary = require('cloudinary').v2;

const {
  sendMessageToAdmin,
  requestSuccessful,
  requestFailed,
  sendEmail,
} = require('../lib/code.bits');
cloudinary.config({
  cloud_name: 'dhijlef1e',
  api_key: '855759169965542',
  api_secret: 'lKr2ekckuuf_N2vd-vbWtwPLnRA',
  secure: true,
});
exports.createInvite = async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    const invitee = new Invitees(body);
    await invitee.save();
    const url =  `https://aariz.herokuapp.com/accept/invite/${invitee._id}?people=one`; 
    const urlHasPlusOne = `https://aariz.herokuapp.com/accept/invite/${invitee._id}?people=two`;
    sendEmail(invitee, url, urlHasPlusOne);
    console.log(invitee, url)
    return requestSuccessful(res, { success: true },url);
  } catch (error) {
    console.error(error);
    return requestFailed(res, 'request failure sign up: ' + error, 500);
  }
};
exports.acceptInvite = async (req, res) => {
  const { id } = req.params;
  const { people } = req.query;
  try {
    console.log('people',people,people != 'two')
    const invitee =  await Invitees.findById(id);
    invitee.approved = true;
    if(people == 'two') invitee.hasPlusOne = true;
    await invitee.save();
    const url = `https://aariz.herokuapp.com/authenticate/invite/${invitee._id}`;
 
    const path = 'public/uploads/' + Math.random() + 'filename.png';
    await QRCode.toFile(path, url, {
      color: {
        dark: '#fff', // Blue dots
        light: '#0000', // Transparent background
      },
    });

    cloudinary.uploader.upload(path, async (error, result) => {
      console.log(result, error); 

      invitee.url = result.url;
      await invitee.save();

      return res.redirect(`https://aariz-birthday.herokuapp.com/approved/${invitee._id}/${invitee.fullname}/${invitee.phone}`);
    });
  } catch (error) {
    console.error(error);
    return requestFailed(res, 'request failure sign up: ' + error, 500);
  }
};
exports.getInvite= async (req, res) => {
  const { id } = req.params;
  try {
    const invitee =  await Invitees.findById(id); 

    return requestSuccessful(res, invitee,'Get invite');
  } catch (error) {
    console.error(error);
    return requestFailed(res, 'request failure sign up: ' + error, 500);
  }
};

exports.authenticateInvite = async (req, res) => {
  const { id } = req.params;
  try {
    const invitee =  await Invitees.findOne({ _id:id, approved: true });
    
    if(!invitee) return res.send('Invitee not found');
    if(invitee.authenticated) return res.send(`${invitee.fullname} has already been authenticated, to attend this event. Phone number ${invitee.phone}`);

    invitee.authenticated = true;
    await invitee.save();

    return res.send(`You have authenticated ${invitee.fullname}, to attend this event. Phone number ${invitee.phone}`);
  } catch (error) {
    console.error(error);
    return requestFailed(res, 'request failure sign up: ' + error, 500);
  }
};
