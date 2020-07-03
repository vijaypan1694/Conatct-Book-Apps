require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4000 ;
var postMessageRoutes = require('./controllers/postMessageController')
const path = require('path')
// mongodb+srv://vijay1694:9471024088@cluster0-hnvbs.mongodb.net/<dbname>?retryWrites=true&w=majority
var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))

if(process.env.NODE_ENV === 'production'){
    app.use(express.sttatic('frontendReact/build'));
    app.get('*',(req,res)=>{
         res.sendFile(path.resolve(__dirname,'frontendReact','build','index.html'))
    })
}
app.listen(PORT,()=>console.log('Server started at : 4000'))


app.use('/postMessages',postMessageRoutes)