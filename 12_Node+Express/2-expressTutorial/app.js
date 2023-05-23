const http= require('http')

const {readFileSync}=require('fs')
//get all files
const homepage=readFileSync('./navbar-app/index.html')
const homeStyles=readFileSync('./navbar-app/styles.css')
const homeImg=readFileSync('./navbar-app/logo.svg')
const homeLogic=readFileSync('./navbar-app/browser-app.js')



const server=http.createServer((req,res)=>{
    console.log("SErver HIT");
    //homepage
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
    res.end()
    }
    //abt page
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Aboutpage</h1>')
    res.end()
    }
    else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()
    }
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeImg)
    res.end()
    }
    else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/js'})
    res.write(homeLogic)
    res.end()
    }
    //404
    else {
        res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
    }
})

server.listen(5000)

