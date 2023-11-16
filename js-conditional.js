/*
Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru
*/
let divisi = "Developer";

if (divisi === "Developer") {
  console.log("Tugas Developer adalah mengembangkan dan memelihara perangkat lunak atau aplikasi.");
} else if (divisi === "Marketing") {
  console.log("Sebagai bagian Marketing, tugas saya adalah mengembangkan strategi pemasaran dan promosi produk.");
} else {
  console.log("Divisi tidak dikenali.");
};

/*
Buat conditional untuk membandingkan 2 buah nilai. 
Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.
*/
let a = 8
let b = 12

if (a > b) {
    console.log("Nilai a lebih besar dari nilai b.");
  } else if (a < b) {
    console.log("Nilai a lebih kecil dari nilai b.");
  } else {
    console.log("Nilai a sama dengan nilai b.");
  }

/*
Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
- Hari minggu dimulai dari angka 1 dan seterusnya
*/
let angkaHari = 6

switch (angkaHari) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  case 4:
    console.log("Hari Rabu");
    break;
  case 5:
    console.log("Hari Kamis");
    break;
  case 6:
    console.log("Hari Jumat");
    break;
  case 7:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Angka yang dimasukkan tidak valid. Masukkan angka 1-7.");
}

/*
Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri
*/
let arah = prompt("Masukkan arah (UP, RIGHT, BOTTOM, LEFT):");

switch (arah.toUpperCase()) {
  case "UP":
    console.log("Karakter berjalan ke atas.");
    break;
  case "RIGHT":
    console.log("Karakter berjalan ke kanan.");
    break;
  case "BOTTOM":
    console.log("Karakter berjalan ke bawah.");
    break;
  case "LEFT":
    console.log("Karakter berjalan ke kiri.");
    break;
  default:
    console.log("Arah yang dimasukkan tidak valid. Harap masukkan UP, RIGHT, BOTTOM, atau LEFT.");
}

