const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from your React app
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Only handle POST requests
    
    if (req.method === 'POST') {
        let body = '';

        // Listen for data chunks
        req.on('data', (chunk) => {
            body += chunk.toString(); // Convert Buffer to string
        });

        // When all data has been received
        req.on('end', () => {
            console.log('Received body:', body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received successfully', receivedData: JSON.parse(body) }));
        });
    } else {
        // Handle other request types
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(8383, 'localhost', () => {
    console.log("Listening on port 8383");
});
