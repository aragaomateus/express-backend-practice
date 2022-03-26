 // we need to require the use of express for this file
const express = require('express')

const app = express()
// route one
app.get('/one',(request,response,nextHandler) =>{
    // is this declaring a type of some sort? 
    // yes, this set the type content the client will receive. 
    response.type('text/plain')
    /*What is the difference between send and write? apperently send, literally sends
    all the data that is to be sent to that route in the moment. Write sends the data 
    partially. 
    */
    response.write('hello')
    nextHandler()
})
// still on the same route.
app.get('/one',(request,response,nextHandler)=>{
    response.status(200).end('world!') // to finalize sending data. 
})
//route two
//remember that this is an arrow function. 
/*Add a route method to handle a request in the path "/two". Two route handlers 
are defined inside the route method to handle the same request. */
app.get('/two',(request,response, nextHandler) =>{
    // first route
    response.type('text/plain')
    response.write('hello')
    nextHandler()
},//second route
(request,response, nextHandler)=>{
    response.status(200).end('moon!')
})

app.listen(
    3000,
    ()=> console.log('webserver running on port 3000'),
    )