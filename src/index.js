const express =require('express');
const app=express();
const router=require('./router')
const morgan=require('morgan')
const cors=require('cors')
//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())
//router
app.use('/',router)
app.set('port',process.env.PORT||4000);
app.listen(app.get('port'),()=>console.log('server in port',app.get('port')));