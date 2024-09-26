const fs= require('fs')
const path = require('path');

const http = require('http');
const server = http.createServer((req, res)=>{
    let filePath = path.join(__dirname, '../build', req.url === '/' ? 'index.html' : req.url);
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };
    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    res.setHeader('Content-Type','text/html')
    
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log(err)
            res.end('error loading page')
        }else{
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
            res.end()
        }
    })
    
})

server.listen(3000,'localhost',()=>{
    console.log('listening on port 3000');
})