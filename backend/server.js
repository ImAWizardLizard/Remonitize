const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.json({message:'WELCOME'});
})

app.listen(8080, () => console.log('Server started on port 3000'));