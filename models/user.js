const { model, Schema } = require('mongoose');

const userSchema = new Schema(
    {
        uid: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
        },
        name: String,
        description: String,
        image: String,
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model('User', userSchema);