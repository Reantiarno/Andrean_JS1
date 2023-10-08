//if, else

 var barang = prompt('masukkan text : \n contoh : mobil, kaca, gadget, dompet');

 if (barang == 'mobil') {
    alert('anda telah menginput mobil');
 } 
 else if (barang == 'kaca') {
    alert('anda telah menginput kaca');
 }
 else if (barang == 'gadget') {
    alert('anda telah menginput gadget');
 }
 else if (barang == 'dompet') {
    alert('anda telah menginput dompet');
 } else{
    alert('input yang masukkan anda salah !');
 }

//nested if

var nilai = prompt('masukkan nilai anda (1-100)');
if (nilai >= 90) {
    alert("Nilai Anda A");
} else { 
    if (nilai >= 80) {
      alert("Nilai Anda B");
    } else {
        if (nilai >= 70) {
            alert("Nilai Anda C");
        } else {
           alert("Nilai Anda D");
        }
    }
}

//contoh nested ke 2

var makanan = prompt('Masukkan jenis makanan atau minuman: (makanan, minuman)');
var protein = prompt('Masukkan makanan/minuman:\n minuman = susu, fanta\n makanan = daging, telur, bayam');

if (makanan === 'makanan') {
  if (protein === 'daging' || protein === 'telur') {
    alert('Makanan sehat dan berprotein tinggi');
  } else if (protein === 'bayam') {
    alert('Makanan sehat namun rendah protein');
  } else {
    alert('Anda memasukkan pilihan protein yang tidak valid');
  }
} else if (makanan === 'minuman') {
  if (protein === 'susu') {
    alert('Minuman sehat');
  } else if (protein === 'fanta'){
    alert('Minuman tidak sehat');
  } else {
    alert('Anda memasukkan pilihan minuman yang tidak valid');
  }
} else {
  alert('Anda memasukkan pilihan yang tidak valid');
}
//Switch case

var jenis = prompt('masukkan jenis makanan/minuman : \n (cth: telur, nasi, hamburger, susu, teh)');

switch(jenis) {

case 'telur' :
case 'nasi':
case 'hamburger' :

alert('Input yang anda masukkan termasuk jenis makanan!');

break;

case 'susu' :

case 'teh' :

alert('Input yang anda masukkan termasuk jenis minuman!');

break;

default:
alert('anda memasukkan nama makanan / minuman yang salah!');

break;
}

//for statement
var u = 1
for(var u = 1; u <=10; u++) {
    console.log('data u ke-, u)
}

//while, do while
//while

var p = 1
while (p <= 10) {
    console.log('data p ke-', p)
    p++
}

// //do while
var t = 1
do {
    console.log('data t ke-', t)  
    t++
}
while ( t <= 7)

//function
alert('Selamat datang di kalkulator penghitung keliling dua persegi. \nKlik OK untuk melanjutkan.')
var a = prompt('masukkan panjang sisi persegi pertama')
var b = prompt('masukkan panjang sisi persegi kedua')

function JumlahKelilingDuaPersegi(a, b) {
    var kelilingA;
    var kelilingB;
    var jumlah;

    kelilingA = 4 * a;
    kelilingB = 4 * b;

    jumlah = kelilingA + kelilingB;

    return jumlah;
}
alert(JumlahKelilingDuaPersegi(a,b));

