const DB=require('./DB')
const model=require('./models')

module.exports={
    init:(req,res)=>{
        console.log('uwu')
        model.show(DB,(err,row)=>{
            if(err){
                console.log(err)
                return res.json({
                    code:false,
                    err
                })
            }
            console.log('0k',row)
            return res.json({
                code:true,
                row
            })
        })
    },
    insert:(req,res)=>{
        const {name,phone,address}=req.body;
        if(!name||!phone||!address){
            return res.json({
                code:false,
                err:'compplete todo los campos por favor'
            })
        }
        model.insert(DB,[name,address,phone],(err,row)=>{
            if(err){
                return res.json({
                    code:false,
                    err
                })
            }
            return res.json({
                code:true,
                row
            })

        })
    },
    delete:(req,res)=>{
        const {id}=req.params;
        if(!id){
            return res.json({
                code:false,
                err:'no se enviaron los parametros solicitados'
            })
        }
        model.delete(DB,id,(err,row)=>{
            if(err){
                return res.json({
                    code:false,
                    err
                })
            }
            if(row.affectedRows==0){
                return res.json({
                    code:false,
                    err:'no hay un dato con ese indice'
                })
            }
            return res.json({
                code:true,
                row
            })
        })
    },
    update:(req,res)=>{
        const {name,address,phone}=req.body;
        const {id}=req.params;
        if(!id||!name||!address||!phone){
                return res.json({
                    code:false,
                    err:'no se enviaron los datos solicitados'
                })
        }
        model.update(DB,[name,address,phone,id],(err,row)=>{
            if(err){
                return res.json({
                    code:false,
                    err
                })
            }
            if(row.affectedRows==0){
                return res.json({
                    code:false,
                    err:'no hay un dato con ese indice'
                })
            }
            return res.json({
                code:true,
                row
            })
        })
    }

}