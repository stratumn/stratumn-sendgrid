/*
  Copyright 2017 Stratumn SAS. All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
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
