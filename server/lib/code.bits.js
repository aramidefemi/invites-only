const request = require('request');
const axios = require('axios');
const sgMail = require('@sendgrid/mail')
let telegram_url =
  'https://api.telegram.org/bot1227967672:AAGT6hYHmrvMP5C6Xi9FJmsCeeNYmoQZrf8/sendMessage';


sgMail.setApiKey(process.env.SENDGRID);

exports.sendEmail = function  (Invitee,url) {
  const msg = {
    to: 'olasubomifemi98@gmail.com',
    from: 'ooluwafemi@saanapay.ng', // Change to your verified sender
    subject: 'New Invitation Received', 
    text: `click here ${url} to accept ${Invitee.fullname}, ${Invitee.phone}`,
    html: `<body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000;line-height: inherit;">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;margin: 0 auto;background-color: #ffffff;width: 100%;line-height: inherit;color: #000000;" cellpadding="0" cellspacing="0">
    <tbody style="line-height: inherit;">
    <tr style="vertical-align: top;line-height: inherit;border-collapse: collapse;">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;line-height: inherit;color: #000000;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
      
   
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;line-height: inherit;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;">
    <div style="width: 100% !important;line-height: inherit;">
    <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;"><!--<![endif]-->
    
  <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody style="line-height: inherit;">
      <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
        <td style="overflow-wrap: break-word;word-break: break-word;padding: 25px 10px 10px 15px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">
          
    <div style="color: #094c54; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px;line-height: 140%;margin: 0;"><span style="font-family: helvetica, sans-serif; font-size: 30px; line-height: 42px;">New Invitation Received</span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody style="line-height: inherit;">
      <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
        <td style="overflow-wrap: break-word;word-break: break-word;padding: 20px 10px 10px 15px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">
          
    <div style="color: #666666; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px;line-height: 140%;margin: 0;"><span style="font-family: helvetica, sans-serif; font-size: 16px; line-height: 22.4px;">Hi, Administrator</span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody style="line-height: inherit;">
      <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
        <td style="overflow-wrap: break-word;word-break: break-word;padding: 15px 10px 20px 15px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">
          
    <div style="color: #666666; line-height: 170%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px;line-height: 170%;margin: 0;"><span style="font-family: helvetica, sans-serif; font-size: 16px; line-height: 27.2px;">Name: ${Invitee.fullname}</span></p>
  <p style="font-size: 14px;line-height: 170%;margin: 0;"><span style="font-family: helvetica, sans-serif; font-size: 16px; line-height: 27.2px;">Phone: ${Invitee.phone}</span></p>
  <p style="font-size: 14px;line-height: 170%;margin: 0;">&nbsp;</p>
  <p style="font-size: 14px;line-height: 170%;margin: 0;"><span style="font-family: helvetica, sans-serif; font-size: 16px; line-height: 27.2px;">This person has show interest in attending your event, if you so approve please click on the accept button below to generate a shareable link which can be shared via whatsapp or any other medium. </span></p>
  <p style="font-size: 14px;line-height: 170%;margin: 0;"><span style="font-family: helvetica, sans-serif; font-size: 16px; line-height: 27.2px;"><br style="line-height: inherit;">This link contains a special QR code that admits the recipient of the link.&nbsp;</span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;line-height: inherit;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;">
    <div style="width: 100% !important;line-height: inherit;">
    <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;"><!--<![endif]-->
    
  <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody style="line-height: inherit;">
      <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
        <td style="overflow-wrap: break-word;word-break: break-word;padding: 10px 10px 10px 15px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">
          
  <div align="left" style="line-height: inherit;">
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:45px; v-text-anchor:middle; width:109px;" arcsize="9%" stroke="f" fillcolor="#094c54"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
      <a href="${url}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family: arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF;background-color: #094c54;border-radius: 4px;-webkit-border-radius: 4px;-moz-border-radius: 4px;width: auto;max-width: 100%;overflow-wrap: break-word;word-break: break-word;word-wrap: break-word;mso-border-alt: none;line-height: inherit;">
        <span style="display:block;padding:13px 30px;line-height:120%;"><span style="font-size: 16px; line-height: 19.2px;">Accept</span></span>
      </a>
    <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
  </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
   
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>`,
  }
 
  const msgs = {
    to:'olasubomifemi98@gmail.com',
    from: 'ooluwafemi@saanapay.ng', // Change to your verified sender
    subject: 'Oluwafemi from engineering',
    url,
    html: `<strong>${url}</strong>`,
  }
  console.log(msgs)
  sgMail
    .send(msgs)
    .then((res) => {
      console.log('Email sent',res)
    })
    .catch((error) => {
      console.error(error)
    })
}

exports.requestFailed = async (res, err, code) => {
  sendMessageToAdmin(`an error occurred ${err}`);
  return res.status(code || 500).send({ error: err });
};
exports.requestSuccessful = async (res, payload, message) => {
  sendMessageToAdmin(message);
  return res.status(200).send(payload);
}; 
const sendMessageToAdmin = function (reply) {
  axios
    .post(telegram_url, {
      chat_id: '1188752469',
      text: `Invites Only - ${reply}`,
    })
    .then((response) => {
      console.log('Message posted');
    })
    .catch((error) => {
      console.log(error);
    });
};
exports.sendMessageToAdmin = sendMessageToAdmin;
