const User = require('../models/user');

module.exports = {
    async get(req, res, next) {
        try {
            let user = await User.findOne({ uid: req.uid });
            if (!user) {
                let userCreate = {
                    uid: req.uid,
                    name: req.name,
                    email: req.email
                }
                if (req.image) userCreate.image = req.image;
                user = await User.create(userCreate);
            }
            res.send(user);
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            let data = req.body;
            let updateData = {
                name: data.name,
                description: data.description,
            }
            if (data.image) updateData.image = data.image;
            await User.updateOne({ uid: req.uid }, updateData);
            res.send({});
        } catch (error) {
            next(error);
        }
    }
}