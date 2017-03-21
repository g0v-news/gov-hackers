const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res, next) => {
  const auth = req.headers.authorization;

  try {
    if (!auth) throw Error();

    const temp = new Buffer(auth.substr(6), 'base64').toString().split(':');
    if (temp[1] !== 'hatetyping') throw Error();

    next();
  } catch (error) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="ljs blog id"');
    res.end('<html><body>Need some creds son</body></html>');
  }
});

app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 3000);
