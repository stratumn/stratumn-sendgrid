const sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

module.exports = {
  send: params => {
    const email = new sendgrid.Email();
    email.addTo(params.to);
    email.setFrom(params.from);
    email.setSubject(params.subject);
    email.setHtml(params.text);

    return new Promise(
      (resolve, reject) =>
        sendgrid.send(email, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        })
      );
  }
};
