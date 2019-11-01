var path = require('path');

module.exports = function(app) {

  // Once user connect to /notes url, notes.html file will be returned
  app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // Once user connect to server, index.html file will be returned
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};


