var sendgrid = require("sendgrid")(process.env.SENDGRID_API_KEY);

module.exports = {
  send: function(data) {
    var email = new sendgrid.Email();
    email.addTo(data.to);
    email.setFrom(data.from);
    email.setSubject(data.subject);
    email.setHtml(data.text);

    return new Promise(
      function(resolve, reject) {
        sendgrid.send(email, function(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
  }
};
