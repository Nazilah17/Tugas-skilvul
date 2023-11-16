/*
1. Console log data diri :
    a. Nama
    b. Asal daerah
    c. Tanggal lahir
    d. Umur
    e. Posisi pekerjaan
3. Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1
*/

let nama = "Nazilah" //Data Nama
let asalDaerah = "Kalimantan Timur" //Data Asal Daerah
let tanggalLahir = "17 Agustus 1998" //Data Tanggal Lahir
let umur = 25 //Data Umur (dalam tahun)
let posisiPekerjaan = "Self Employment" //Pekerjaan

console.log(`Nama : ${nama}`);
console.log(`Asal Daerah : ${asalDaerah}`);
console.log(`Tanggal Lahir : ${tanggalLahir}`);
console.log(`Umur : ${umur}`);
console.log(`Posisi Pekerjaan : ${posisiPekerjaan}`);

/*
2. Membuat interaksi kepada user
    a. Prompt data berikut:
        i. Nama user
        ii. Asal Negara
    b. Confirm data user. Apakah data yang diisi sudah benar?
    c. Alert “Terima kasih sudah mengisi form”
4. Berikan multiple comments pada fitur soal nomor 2
*/

/*Prompt untuk mendapatkan nama user dan asal negara user
*/
let namaUser = prompt("Masukkan Nama Anda");
let asalNegara = prompt("Masukkan Asal Negara Anda");
/*konfirmasi apakah data sudah diisi dengan benar oleh user
*/
let konfirmasiData = confirm("Apakah data yang diisi sudah benar?\nNama: " + namaUser + "\nAsal Negara: " + asalNegara);
/*alert jika data sudah diisi dengan benar
dan jika belum maka user diminta untuk memeriksa kembali
*/
if (konfirmasiData) {
    alert("Terima kasih sudah mengisi form");
} else {
    alert("Periksa kembali data yang diisi");
}

/*
5. Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1.
   Lalu panggil dan tampilkan dengan menggunakan console log
*/
let dataDiri = {
    nama : nama,
    asalDaerah : asalDaerah,
    tanggalLahir : tanggalLahir,
    umur : umur,
    posisiPekerjaan : posisiPekerjaan
};

console.log(dataDiri);

/*
6. Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.
- 25 + 10
- 100 * 2
- 99 / 2
- 99 % 2
*/
let a = 25+10;
let b = 100*2;
let c = 99/2;
let d = 99%2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);