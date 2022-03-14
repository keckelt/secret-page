const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const basicAuth = require('express-basic-auth')

const app = express();
const user = process.env.USER;
const pass = process.env.PASS;

app.set('port', process.env.PORT || 5000);

if (user && pass) {
  console.info('enable basic auth')
  app.use(basicAuth({
    users: { [user]: pass },
    challenge: true
  }));
} else {
  console.warn('no credentials given. disabling authentification');
}

app.use(logger('dev'));
app.use(compression());
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});
