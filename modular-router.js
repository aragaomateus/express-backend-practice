const express = require('express')
const app = express()

const miniapp = express.Router()
miniapp.get('/home',(request,response,next) =>{
    const url = request.originalUrl
    // because I am using 
    response.status(200).send(`you are visiting /home from ${url}`)
})

// oque isso ta fazendo?? Ok thisi is so I can use the same route home of the mini app in two diffrent oaths of my progream
// and this is modular, like a funtion, that is why we say modular router. 
app.use('/first',miniapp)
app.use('/second',miniapp)

app.listen(3000, ()=>console.log('live from second street and port 3000'))