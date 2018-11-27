const express = require('express');
const app = express();
const router  = express.Router();

router.get('/pop',(req,res)=>{
    res.json({msg:'pop api route'})
});

app.get('/',(req,res)=>{
    
})


app.listen(3030,(req,res)=>{
    console.log('port 3000');
})