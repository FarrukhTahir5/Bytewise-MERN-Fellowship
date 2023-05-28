const express=require('express')
const app=express()
const people=require('./routes/people')
const auth=require('./routes/auth')
//statuc assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/login',auth)


app.listen(5000,()=>{
    console.log("listening");
})











// const express =require('express')
// const app=express()
// const morgan=require('morgan')
// // req=>middleware=>res ..

// const logger=require('./logger')
// const authorize = require('./authorize')
// // app.use('/api',[logger,authorize])
// // app.use('/',logger);
// app.use(morgan('tiny'))
// app.get('/',(req,res)=>{    
//     res.send('Home')
// })

// app.get('/about',(req,res)=>{
//     res.send('About')
// })
// app.get('/api/products',(req,res)=>{
//     res.send('Products')
// })
// app.get('/api/items',(req,res)=>{
//     res.send('Items')
// })

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000');
// })

////////////////////////


// const express=require('express')
// const app=express()
// const {products}=require('./data')

// app.get('/',(req,res)=>{
//     res.send('<h1>HomePage</h1><a href="/api/products">Products</a>')
//     res.json(products)
// })
// app.get('/api/products',(req,res)=>{
//     const newProducts=products.map((product)=>{
//         const {id,name,image}=product;
//         return {id,name,image}
//     })
//     res.json(newProducts)
// })
// app.get('/api/products/:productID',(req,res)=>{
//     const {productID}=req.params;
//     const singleProduct=products.find((product)=>product.id==Number(productID))
//     if(singleProduct)
//     res.json(singleProduct)
//     else
//     res.status(404).send('Page not Found')
// })

// app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
//     console.log(req.params);
//     res.send('yup')
// })

// app.get('/api/v1/query',(req,res)=>{
//     console.log(req.query)
//     const {search,limit}=req.query
//     let sortedProducts= [...products];
//     if(search){
//         sortedProducts=sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit){
//         sortedProducts=sortedProducts.slice(0,Number(limit))
//     }
//     if(sortedProducts.length<1){
//     // res.status(200).send('no product matched')
//      return res.status(200).json({success:true,data:[]})
//     }
//     res.status(200).json(sortedProducts)

// })

// app.listen(5000,()=>{
//     console.log("Server Listens on 5000");
// })























// const express=require('express')
// const path=require('path')
// const app=express();
// //setup static & middleware
// app.use(express.static('./public'))

// // //app.get
// // app.get('/',(req,res)=>{
// //     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// // })

// app.get('/about',(req,res)=>{
//     res.status(200).send('About page')
// })

// //app.all
// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>resource not Found!</h1>')
// })

// //app.listen
// app.listen(5000,()=>{
//     console.log('Server is Listening on port 5000');
// })




// const http= require('http')

// const {readFileSync}=require('fs')
// //get all files
// const homepage=readFileSync('./navbar-app/index.html')
// const homeStyles=readFileSync('./navbar-app/styles.css')
// const homeImg=readFileSync('./navbar-app/logo.svg')
// const homeLogic=readFileSync('./navbar-app/browser-app.js')



// const server=http.createServer((req,res)=>{
//     console.log("SErver HIT");
//     //homepage
//     if(req.url==='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//     res.write(homepage)
//     res.end()
//     }
//     //abt page
//     else if(req.url==='/about'){
//         res.writeHead(200,{'content-type':'text/html'})
//     res.write('<h1>Aboutpage</h1>')
//     res.end()
//     }
//     else if(req.url==='/styles.css'){
//         res.writeHead(200,{'content-type':'text/css'})
//     res.write(homeStyles)
//     res.end()
//     }
//     else if(req.url==='/logo.svg'){
//         res.writeHead(200,{'content-type':'image/svg+xml'})
//     res.write(homeImg)
//     res.end()
//     }
//     else if(req.url==='/browser-app.js'){
//         res.writeHead(200,{'content-type':'text/js'})
//     res.write(homeLogic)
//     res.end()
//     }
//     //404
//     else {
//         res.writeHead(404,{'content-type':'text/html'})
//     res.write('<h1>page not found</h1>')
//     res.end()
//     }
// })

// server.listen(5000)

