'use strict'

const port = process.env.PORT || 8080;
const app = require('./app');
const db = require('./services/db');

const init = async () => {
    try {
        await db.connect();
        console.log('Database: Online');

        app.listen(port, () =>
            console.log(`Listening on *:${port}`)
        );
    } catch (e) {
        console.log(e);
    }
};

init();