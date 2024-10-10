const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {
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

    if (req.method === 'POST' && req.url === '/') {
        let body = '';

        // Collect data from the request
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Once all data has been received
        req.on('end', () => {
            console.log('Received data:', body);
            // You can process the data here and send a response back
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received successfully' }));
        });
    } else {
        // Serve static files
        res.setHeader('Content-Type', contentType);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Error loading page');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            }
        });
    }
});

server.listen(8383, 'localhost', () => {
    console.log('Listening on port 8383');
});
