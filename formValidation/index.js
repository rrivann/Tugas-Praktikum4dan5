function valid() {
  const valid = '1px solid green';
  const err = '1px solid red';

  let nPel = document.getElementById('np');
  let msgnp = document.getElementById('msgnp');
  if (nPel.value == '') {
    msgnp.innerHTML = '<br>* Nama Pelanggan tidak boleh kosong !';
    nPel.style.border = err;
  } else if (nPel.value.length > 30) {
    msgnp.innerHTML = '<br>* Nama Pelanggan maksimal 30 karakter !';
    nPel.style.border = err;
  } else {
    msgnp.innerHTML = '';
    nPel.style.border = valid;
    document.getElementById('hNp').innerHTML = nama.value;
  }

  const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = document.getElementById('email');
  let msgEmail = document.getElementById('msgEmail');
  if (email.value == '') {
    msgEmail.innerHTML = '<br>* Email tidak boleh kosong !';
    email.style.border = err;
  } else if (!reEmail.test(String(email.value).toLowerCase())) {
    msgEmail.innerHTML = '<br>* Harus format email !';
    email.style.border = err;
  } else {
    msgEmail.innerHTML = '';
    email.style.border = valid;
  }

  const reTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
  let jam = document.getElementById('jam');
  let msgJam = document.getElementById('msgJam');
  if (jam.value == '') {
    msgJam.innerHTML = '<br>* Jam tidak boleh kosong !';
    jam.style.border = err;
  } else if (!reTime.test(jam.value)) {
    msgJam.innerHTML = '<br>* Format jam antara 00:00 - 23:59 !';
    jam.style.border = err;
  } else {
    msgJam.innerHTML = '';
    jam.style.border = valid;
  }

  let tujuan = document.getElementById('tujuan');
  let msgTujuan = document.getElementById('msgTujuan');
  if (tujuan.value == '') {
    msgTujuan.innerHTML = '<br>* Tujuan tidak boleh kosong !';
    tujuan.style.border = err;
  } else {
    msgTujuan.innerHTML = '';
    tujuan.style.border = valid;
  }

  let jml = document.getElementById('jumlah');
  let msgJumlah = document.getElementById('msgJumlah');
  if (jml.value == '') {
    msgJumlah.innerHTML = '<br>* Jumlah tiket tidak boleh kosong !';
    jml.style.border = err;
  } else if (!(jml.value >= 1 && jml.value <= 10)) {
    msgJumlah.innerHTML = '<br>* Jumlah tiket antara 1 - 10 !';
    jml.style.border = err;
  } else {
    msgJumlah.innerHTML = '';
    jml.style.border = valid;
  }
}