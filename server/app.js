const express = require('express');
const cors = require('cors');
const app = express();


const { CONFIG } = require('./configuration');
const { nameRouter } = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', nameRouter);

app.listen(CONFIG.PORT, () => {
    console.log(`App listen port: ${CONFIG.PORT}`);
});