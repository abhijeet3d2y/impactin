var _ = require('lodash');	
var nodemailer = require('nodemailer');

var config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'abhiasce@gmail.com',
        pass: process.env.pass
    }
};
    
var transporter = nodemailer.createTransport(config);

var defaultMail = {
    from: 'abhiasce@gmail.com',
    text: 'testing maildev',
};


const send = (to, subject, html) => {
    // use default setting
    mail = _.merge({html}, defaultMail, to);
    
    // send email
    transporter.sendMail(mail, function(error, info){
        if(error) return console.log(error);
        console.log('mail sent:', info.response);
    });
}
module.exports = {
    send
}