//HTTP Module
const http=require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our HomePage');
    }
    else if(req.url==='/about'){
        res.end('Welcome to our About Page');}
    else{
        res.end(`<h1>Pagenot Found</h1><a href='/'>Home</a>`);
    }

})
server.listen(5000)