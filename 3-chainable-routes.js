const express = require('express')
const app = express()

//at this time we are using the function route
app.route('/home').get((request,response,nextHandler) => {
    response.type('text/html')
    response.write('<!DOCTYPE html>')
    nextHandler()
}).get((request,response,nextHandler)=>{
    // is this html here also like the one for ht react, so its JSX?
    // it was the backwards `` qoutes thing that i missed in the first try. 
    // I NEED TO UNDERSTAND WHY THEY WORK. 
    response.end(`
        <html lang ="en">
            <head>
                <meta charset='UTF-8'/>
                <title>WebApp powered by ExpressJS</title>
            </head>
            <body role='application'>
                <form method='post' action="/home">
                    <input type='text'/>
                    <button type = 'submit'>Send</button>
                </form>
            </body>
        </html>`
    )
})
.post((request,response, nextHandler)=>{
    response.send('Got it!')
})

app.listen(3000, ()=> console.log('live from second street and port 3000'))