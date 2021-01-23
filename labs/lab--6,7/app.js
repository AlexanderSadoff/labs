const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let storage = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/guide', function (req,res){
    res.send(storage);
});

app.get('/guide/:id', function (req,res){
    const id = req.params.id;
    const item = storage[id];
    if (item===null|| id>=storage.length) {
        const und = {deleted:1}
        res.send(und);
    } else res.send(item);

});

app.post('/guide', function (req,res){
    const newid = storage.push(req.body)-1;
    res.send(newid.toString());
    console.log(req.body);
});
app.put('/guide/:id',(req,res) =>{
    const id = req.params.id;
    storage[id] = req.body;
    res.send(id.toString());
});
app.delete('/guide/:id', (req,res) =>{
    const id = req.params.id;
    storage[id] = null;
    res.send(id.toString()  );
});
app.listen(3000,function(){console.log('Server started')});
