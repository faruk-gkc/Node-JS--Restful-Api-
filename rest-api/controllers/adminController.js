module.exports = {
    all: function(req, res){
        res.send('All todos')
    },
    viewOne: function(req, res){
        console.log('Viewing ');
        res.json({
                    "userId": 122,
                    "title": "delectus aut autem",
                    "completed": false
                })

    },
};