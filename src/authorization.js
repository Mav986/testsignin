const crypto = require('crypto');
const TYPE = {
    STAFF: 'staff',
    STUDENT: 'student'
};

id = 0;
users = [];

function initUsers(){
}

function generateToken(){
    token = crypto.randomBytes(10).toString('hex');
    return token;
}

function compareToken(received){
    console.log('received: ' + received + "\ngenerated: " + token);
    let match = token === received;
    console.log('match: ' + match);
    return match;
}

function loadUser(email){
    id = email.substring(0, email.lastIndexOf("@"));
    console.log("storing: " + id);
}

function getUser(){
    let userOne = {
        id: 18529687,
        type: TYPE.STUDENT,
        actorIds: [
            1, 2, 3, 4, 5
        ],
        scriptIds: [
            1, 2, 3, 4, 5
        ],
        administrator: true
    };


    let userTwo = {
        id: 19589299,
        type: TYPE.STAFF,
        actorIds: [
            6, 7, 8
        ],
        scriptIds: [
            6, 7, 8, 9, 10, 11
        ],
        administrator: false
    };

    return userOne;
}

module.exports = {
    initUsers: initUsers,
    generateToken: generateToken,
    compareToken: compareToken,
    loadUser: loadUser,
    getUser: getUser
};