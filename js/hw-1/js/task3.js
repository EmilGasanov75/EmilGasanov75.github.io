//3

let promp = prompt('Password?');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

if(promp === null) {
message = 'Скасовано користувачем';
    alert(message)
}

if(promp === ADMIN_PASSWORD) {
message = 'welcome';
    alert(message)
}

if(promp !== ADMIN_PASSWORD && promp != null) {
message = 'Неправильний пароль';
    alert(message)
}