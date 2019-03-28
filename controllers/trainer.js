var Trainer = require('../models/trainer');

exports.test = function (req, res) {
    res.send('TEST - GET');
};

exports.alltrainer = function (req, res) {
    Trainer.find( function (err, trainer) {
        if (err) return next(err);
        //res.send(trainer);

        var json = JSON.stringify(trainer);
        //console.log(json)
        //console.log(typeof trainer.join())
        //var jsonArray = JSON.parse(JSON.stringify(trainer))
        //res.send(trainer.join());
        //res.send(JSON.parse(JSON.stringify(trainer)))
        res.send(json)
        

    })
};

exports.trainer_create = function (req, res) {

    var trainer = new Trainer(
        req.body
    );
    
    trainer.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Trainer added')
    })
};

exports.trainer_details = function (req, res) {
    Trainer.findById(req.params.id, function (err, trainer) {
        if (err) return next(err);
        res.send(trainer);
    })
};

exports.trainer_update = function (req, res) {
    console.log(req.body)
    Trainer.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, trainer) {
        if (err) return next(err);
        res.send('Trainer udpated');
    });
};

exports.trainer_delete = function (req, res) {
    Trainer.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Trainer Deleted');
    })
};