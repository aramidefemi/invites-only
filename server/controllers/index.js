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
    const url = 'http://localhost:5000/accept/invite/' + invitee._id; 
    sendEmail(invitee, url);
    console.log(invitee, url)
    return requestSuccessful(res, { success: true },url);
  } catch (error) {
    console.error(error);
    return requestFailed(res, 'request failure sign up: ' + error, 500);
  }
};
exports.acceptInvite = async (req, res) => {
  const { id } = req.params;
  try {
    const invitee =  await Invitees.findById(id);
    invitee.approved = true;
    await invitee.save();

    const url = 'http://localhost:5000/authenticate/invite/' + invitee._id;

    const path = 'public/uploads/' + Math.random() + 'filename.png';
    await QRCode.toFile(path, url, {
      color: {
        dark: '#094c54', // Blue dots
        light: '#0000', // Transparent background
      },
    });

    cloudinary.uploader.upload(path, function (error, result) {
      console.log(result, error); 
      return res.redirect('http://localhost:3000/approved/' + invitee._id);
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

    return requestSuccessful(res, invitee);
  } catch (error) {
    console.error(error);
    return requestFailed(res, 'request failure sign up: ' + error, 500);
  }
};

exports.authenticateInvite = async (req, res) => {
  const { id } = req.params;
  try {
    const invitee =  await Invitees.findOne({ _id:id, approved: true });
    
    if(invitee) return res.send('Invitee not found');
    if(invitee.authenticated) return res.send(`${invitee.fullname} has already been authenticated, to attend this event. Phone number ${invitee.phone}`);

    invitee.authenticated = true;
    await invitee.save();

    return res.send(`You have authenticated ${invitee.fullname}, to attend this event. Phone number ${invitee.phone}`);
  } catch (error) {
    console.error(error);
    return requestFailed(res, 'request failure sign up: ' + error, 500);
  }
};
