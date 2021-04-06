const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type','text/html');
    if(url==='/' && method==='GET')
    {
        res.write('<html><body><h3>Welcome to the basics</h3>');
        res.write('<br>')
        res.write('<form action="/create-user" method="POST">Username:<input name="username"></input><input type="submit"></input></form></body></html>')
        res.end();
    }
    if(url==='/users'&&method==='GET')
    {
        res.write('<html><body><ul><li>User Alpha</li>');
        res.write('<li>User Beta</li>');
        res.write('<li>User Gamma</li></ul></body></html>');
        res.end();
    }
    if(url ==='/create-user'&&method==='POST')
    {
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            console.log(Buffer.concat(body).toString().split('=')[1]);
        })
        res.end();
    }
});

server.listen(port);
