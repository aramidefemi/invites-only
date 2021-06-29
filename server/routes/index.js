
const controller = require('../controllers/');
module.exports = (app) => {
  app.post('/create/invite',  controller.createInvite);
  app.get('/accept/invite/:id',  controller.acceptInvite);
  app.get('/authenticate/invite/:id',  controller.authenticateInvite);
  // app.get('/',  controller.displayApplicationForm);
  app.get('/invite/:id',  controller.getInvite);
};
