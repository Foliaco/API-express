module.exports={

    show:(db,call)=>{
        db.query('select * from customer',null,call)
    },
    insert:(db,data,call)=>{
        db.query('insert into customer values(null,?,?,?)',data,call)
    },
    delete:(db,data,call)=>{
        db.query('delete from customer where id=?',data,call)
    },
    update:(db,data,call)=>{
        db.query('update customer set name=?,address=?,phone=? where id=?',data,call)
    }
}