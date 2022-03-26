const express = require('express');
const app = express();
const loggerMiddleware = require('./middleware-logger')

app.use(loggerMiddleware({
    enable: true,
}))

app.listen(3000,
    ()=> console.log('webserver running on port 3000')
    )