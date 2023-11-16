/*
1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
Lakukan FOR LOOP pada Javascript.
*/
for (let i = 1; i <= 100; i++) {
    console.log("User ke - "+i)
};

/*
2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
- Nilai awal = 0
- Pengulangan = 10 kali
- Nilai awal ditambah 2 setiap pengulangan
- Tampilan hasil penambahan pada setiap pengulangan
*/
let nilaiAwal = 0;

for (let i = 1; i <= 10; i++) {
  nilaiAwal += 2;
  console.log("Pengulangan ke-" + i + ": Nilai = " + nilaiAwal);
}

/*
3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
- Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
- Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
*/
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " adalah nilai genap");
    } else {
      console.log(i + " adalah nilai ganjil");
    }
}

/*
4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
- Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
- Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
- Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
*/
// Inisialisasi variabel untuk menghitung jumlah klik OK
let jumlahKlikOK = 0;
function tampilkanKonfirmasi() {
  let konfirmasi = confirm("Apakah anda mau mengulang?");
  if (konfirmasi) {
    jumlahKlikOK++;
    tampilkanKonfirmasi();
  } else {
    alert("Perulangan sudah dilakukan sebanyak " + jumlahKlikOK + " kali.");
  }
}

tampilkanKonfirmasi();

/*
5. Buat sebuah program kuis.
- Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
- Lakukan pengecekan apakah jawaban dari user sudah benar
- Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
- Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
*/
let jawabanBenar = "Impact Byte";

while (true) {
  let jawabanUser = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
  if (jawabanUser === jawabanBenar) {
    alert("Selamat jawaban kamu benar!");
    break;
  } else {
    alert("Jawaban kamu salah. Silakan coba lagi.");
  }
}