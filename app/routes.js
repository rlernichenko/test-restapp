var user = require('./models/users');

module.exports = {
    configure: function(app) {
        app.get('/users/', function(req, res) {
            user.get(res);
        });

        app.post('/users/', function(req, res) {
            user.create(req.body, res);
        });

        app.put('/users/:id/', function(req, res) {
            user.update(req.body, res);
        });

        app.delete('/users/:id/', function(req, res) {
            user.delete(req.params.id, res);
        });
    }
};