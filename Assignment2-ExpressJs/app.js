const app = require('express')();

app.use((req,res,next)=>{
    console.log('Just a dummy middleware');
    next();
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users',(req,res,next)=>{
    console.log('In users');
    res.send('<html>Users</html>');
});

app.use('/',(req,res,next)=>{
    console.log('In home page.');
    res.send('<html>Home</html>');
});

app.listen(3000);