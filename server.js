const http = require('http')
const fs = require('fs/promises')
const path = require('path')

const server = http.createServer(async(req,res)=>{
    if(req.url === "/"){
        let filePath = path.join(__dirname,"index.html")
        let page = await fs.readFile(filePath)
        res.writeHead(200,{ContentType:"text/html"})
        return res.end(page)
    }
})

server.listen(8090,'0.0.0.0',()=>{
    console.log("connected to server")
})