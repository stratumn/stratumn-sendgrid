/*
    Copyright (C) 2017  Stratumn SAS

    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

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
