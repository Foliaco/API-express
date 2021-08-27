const router=require('express').Router()
const control=require('./controller')

router.get('/init',control.init)
router.post('/add',control.insert)
router.delete('/delete/:id',control.delete)
router.put('/update/:id',control.update)
module.exports=router;