const http = require('http');
const nodemailer = require('nodemailer');
const cheerio = require('cheerio');
const fs = require('fs');
const path =require('path')
const feeStructurePath = path.join(__dirname,'/Views/feeStructureTemplate.html')
// Create a transporter

const feePlans = {
    "pg":{"admFee":3000,"annFee":1600,"tuFee":750,"exmFee":400},
    "lkg":{"admFee":3000,"annFee":1600,"tuFee":800,"exmFee":400},
    "ukg":{"admFee":3000,"annFee":1600,"tuFee":800,"exmFee":400},
    "1":{"admFee":3000,"annFee":1600,"tuFee":800,"exmFee":400},
    "2":{"admFee":3000,"annFee":1600,"tuFee":850,"exmFee":400},
    "3":{"admFee":3000,"annFee":1600,"tuFee":900,"exmFee":400},
    "4":{"admFee":3000,"annFee":1600,"tuFee":900,"exmFee":400},
    "5":{"admFee":3000,"annFee":1600,"tuFee":950,"exmFee":400},
    "6":{"admFee":3500,"annFee":2000,"tuFee":1000,"exmFee":400},
    "7":{"admFee":3500,"annFee":2000,"tuFee":1050,"exmFee":500},
    "8":{"admFee":3500,"annFee":2000,"tuFee":1100,"exmFee":500},
    "9":{"admFee":3500,"annFee":3900,"tuFee":1450,"exmFee":600},
    "10":{"admFee":"","annFee":5100,"tuFee":2000,"exmFee":600},
    "11":{"admFee":3500,"annFee":5400,"tuFee":2100,"exmFee":600},
    "12":{"admFee":"","annFee":5900,"tuFee":2600,"exmFee":600},
}
let transporter = nodemailer.createTransport({
    service:"gmail", // Replace with your SMTP server
   
    auth: {
        user: "donotreply-admin@newangels.in", // Your email
        pass: "enfx mblf nimk xgtv",    // Your email password or app-specific password
    },
});



const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from your React app
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Only handle POST requests
    
    if (req.method === 'OPTIONS') {
        res.writeHead(204); // No content
        res.end();
        return;
    }
    if(req.method==="GET"){
        console.log(req.url)
    }
    if (req.method === 'POST') {        
        console.log(req.url)
        let body = '';
        // Listen for data chunks
        req.on('data', (chunk) => {
            body += chunk.toString(); // Convert Buffer to string
        });

        // When all data has been received
        req.on('end', () => {
            console.log('Received body:', body);
            const formData = JSON.parse(body)
            const classKey = formData.class;
            const feeToSend = feePlans[classKey];
            if(req.url==="/feeStructure"){
                fs.readFile(feeStructurePath,'utf-8',(err,data)=>{
                    
                    const setDoc = cheerio.load(data);
                    setDoc("#admAmount").text(feeToSend.admFee)
                    setDoc("#annualAmount").text(feeToSend.annFee)
                    setDoc("#tuitionAmount").text(feeToSend.tuFee)
                    setDoc("#examAmount").text(feeToSend.exmFee)
                    setDoc(".classname").text(classKey)
                    const newDoc = setDoc.html();
                    
                    let mailOptions = {
                        from: "donotreply-admin@newangels.in", // Sender address
                        to: formData.email, // List of recipients
                        subject: 'Hello ✔', // Subject line
                        text: 'Hello world?', // Plain text body
                        html: newDoc, // HTML body
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log('Error:', error);
                        }
                        console.log('Message sent:', info.messageId);
                        console.log(data)
                    });
                })
            }
            
            
            setTimeout(()=>{
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received successfully', receivedData: JSON.parse(body) }));
           },2000)
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
