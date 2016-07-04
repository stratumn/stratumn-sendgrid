const EmailHelper = require('stratumn-sendgrid');

module.exports = {
  requestSignatures: (data) => {
    EmailHelper.send({
      to: data.email,
      from: data.requesterEmail,
      subject: data.fileName,
      text: data.text
    })
      .then(() => this.append())
      .catch(err => this.reject(err));
  }
};
