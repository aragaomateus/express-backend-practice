const express = require('express');
const app = express();

app.use((request,response,next) =>{
    // what is this query key word and does it work for the url path . is that a query?
    request.allowed =Reflect.has(request.query,'allowme')
    next()
})

app.get('/',(request,response,next) =>{
    if (request.allowed){
        response.send('Hello secret world!!')
    }else{
        response.send('You are not allowed to enter')
    }
})

app.listen(3000,
    ()=> console.log('webserver running on port 3000'))
