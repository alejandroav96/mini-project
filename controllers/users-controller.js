const { createError, errorCodes } = require('../errors');
const User = require('../models/user');

const validation = (data, next) => {
    let { email, name, description, image } = data;
    if (email == null || name == null || description == null) {
        throw next(createError('Data is null', errorCodes.BAD_REQUEST));
    }
}

module.exports = {
    async getAll(req, res, next) {
        try {
            let users = await User.find({});
            res.send(users);
        } catch (error) {
            next(error);
        }
    },

    async save(req, res, next) {
        try {
            let data = req.body;
            validation(data, next);
            let user = await User.create(data);
            res.send({ id: user.id });
        } catch (error) {
            next(error);
        }
    },


};
