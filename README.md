# stratumn-sendgrid

Sendgrid helper to be used in a Stratumn Agent

[![build status](https://secure.travis-ci.org/stratumn/stratumn-sendgrid.svg)](http://travis-ci.org/stratumn/stratumn-sendgrid)
[![dependency status](https://david-dm.org/stratumn/stratumn-sendgrid.svg)](https://david-dm.org/stratumn/stratumn-sendgrid)

## Installation

```
npm install --save stratumn-sendgrid
```

## Usage

In your agent:

````javascript
const EmailHelper = require('./stratumn-sendgrid');

module.exports = {
  requestSignatures: function(data) {
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
``

## Credits
[Stratumn Team](https://github.com/stratumn/)

## License

MIT
