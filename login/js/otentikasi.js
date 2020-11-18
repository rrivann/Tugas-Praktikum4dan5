function Login() {
  let aLogin = document.getElementById('bLogin');
  let username = aLogin.login.value;
  let password = aLogin.password.value;
  console.log(username);
  console.log(password);
  if (username == 'rivan' && password == 'sukses') {
    alert('sukses login');
    document.getElementById('bLogin').action = '/login/succesLogin.html';
  } else {
    alert('username atau password anda salah !');
  }
}
