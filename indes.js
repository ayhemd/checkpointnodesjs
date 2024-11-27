console.log("Hello World");
// server.js
const http = require('http');

//server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});



// file-operations.js
const fs = require('fs');

// Create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and saved!');

    // Read and console.log data from "welcome.txt"
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});


// password-generator.js
const generatePassword = require('generate-password');

const password = generatePassword.generate({
    length: 10,
    numbers: true
});

console.log(password);


// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Setup email data
let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'Hello from Node.js',
    text: 'Hello Node.js!'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
