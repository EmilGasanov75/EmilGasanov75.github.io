//3

let promp = prompt('Password?');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
if(promp === null) {
    alert('Скасовано користувачем')
}

message = 'Доступ заборонений, невірний пароль!';

if(promp === ADMIN_PASSWORD) {
    alert('Welcome')
}

else {
    alert(message);
}
