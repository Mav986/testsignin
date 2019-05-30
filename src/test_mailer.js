const mail_test = require('nodemailer');
const auth = require('./auth_details');

let transporter = mail_test.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: auth.user,
        pass: auth.key
    }
});

async function sendMail(email, content){
    let info = await transporter.sendMail({
        from: '"Artificialis Bot" <artificialisbot@gmail.com>',
        to: email,
        subject: "Login Authorization",
        text: content
    });

    console.log("Message sent: %s", info.messageId);
}

module.exports = {
    sendTestMail: sendMail
};