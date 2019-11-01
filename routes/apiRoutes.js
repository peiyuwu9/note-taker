module.exports = function(app, connection) {

  // Post notes to mySQL
  app.post("/api/notes", function(req, res){
    connection.query('INSERT INTO notes SET title = "' + req.body.noteTitle + '", text= "' + req.body.noteText + '";', function(err){
      if (err) throw err;
    });
  });

  // Retrieve notes from mySQL as api data
  app.get("/api/notes", function(req, res){
    connection.query("SELECT * FROM notes;", function(err, result){
      if (err) throw err;
      res.json(result);
    })
  });

  // Delete notes from mySQL
  app.delete("/api/notes/:id", function(req, res){
    connection.query("DELETE FROM notes WHERE id = ?", [req.params.id], function(err){
      if (err) throw err;
    });
  });

  // Retrieve selected notes to mySQL
  app.get("/api/notes/:id", function(req, res){
    connection.query("SELECT * FROM notes WHERE id = ?", [req.params.id], function(err, result){
      if (err) throw err;
      res.json(result);
    })
  });

  // Update notes from mySQL
  app.put("/api/notes/:id", function(req, res){
    connection.query("UPDATE notes SET title = ?, text = ? WHERE id = ?", [req.body.noteTitle, req.body.noteText,req.params.id], function(err){
      if (err) throw err;
    });
  });
}