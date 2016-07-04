# stratumn-sendgrid

Sendgrid helper to be used in a Stratumn Agent

## Installation

```
npm install --save stratumn-sendgrid
```

## Usage

Setup your API key:

```bash
stratumn-set-config myApp SENDGRID_API_KEY=<mykey>
```

In your agent:

````javascript
const EmailHelper = require('stratumn-sendgrid');

module.exports = {
  requestSignatures: data => {
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
````

## Credits
[Stratumn Team](https://github.com/stratumn/)

## License

MIT
