const express = require('express');
const app = express()
const router = express.Router();

router.use((request,response,next) => {
    console.log('URL:',request.originalUrl)
    next('route')
})
// mount the Router to the path '/router'
app.use('/router',router)

app.listen(3000,()=>console.log('webserver running on port 3000'))