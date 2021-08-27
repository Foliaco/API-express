const MYSQL=require('mysql')
const DB=MYSQL.createConnection({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'crudnode'
})
DB.connect(err=>{
    if(err){
        console.log('error en la database',err)
    }
    else{
        console.log('database connect')
    }
})
module.exports=DB;