function login(){
    let token = document.getElementById('tokenField').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/login/' + token);
    xhr.send();
}

function send(){
    let id = document.getElementById('studentID').value;
    let email = id + '@student.curtin.edu.au';
    let xhr = new XMLHttpRequest();

    let data = {
        email: email
    };

    xhr.open('POST', '/send/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if(xhr.status === XMLHttpRequest.DONE){
            console.log(email);
            resolve();
        }
    };
    xhr.send(JSON.stringify(data));
}