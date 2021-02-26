const express = require('express');
var nodemailer = require('nodemailer');
var billing_email = require('express-email')(__dirname + '/email/billing');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = express.Router();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'golden198989@outlook.com',
        pass: 'admin@123@'
    }
});

app.route('/status').get(function (req, res) {
    res.status(200).json({
        'status': 0
    });
    // res.status(200).json({
    //     'status': 1,
    //     'url':'https://google.com'
    // });
});

app.use('/todos', todoRoutes);
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on Port: " + process.env.PORT || 3000);
});