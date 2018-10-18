var Call = require('../../models/call');

module.exports.add = (req, res) => {
    var call = new Call(req.body);
    call.save((err) => {
        if (err) res.send(err);

        return res.json(call);
    });
};

module.exports.get = (req, res) => {
    Call.find((err, calls) => {
        if (err) res.send(err);

        res.json(calls);
    });
};

module.exports.view = (req, res) => {
    Call.findOne({ _id: req.params.id }).exec((err, call) => {
        if (err) res.send(err);

        return res.json(call);
    });
};
