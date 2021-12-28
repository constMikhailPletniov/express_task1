const express = require('express');

const app = express();

const { CONFIG } = require('./configuration');
const { nameRouter } = require('./routers');

app.use(express.urlencoded());

app.use('/users', nameRouter);
app.use('/ping', (req, res) => res.send('pong'));

app.listen(CONFIG.PORT, () => {
    console.log(`App listen port: ${CONFIG.PORT}`);
});