/*
Buat sebuah function untuk toko online kita. 
Ikuti poin-poin dibawah ini:
- Function mempunyai 2 parameter yaitu nama pembeli dan produk yang dibeli
- Function akan mengembalikan nilai “Terima kasih (nama pembeli) telah membeli produk (produk yang dibeli)”
- Panggil function dengan menggunakan console.log()
*/
function membeli(namaPembeli,produk){
    return "Terima kasih " + namaPembeli + " telah membeli produk " + produk;
}

console.log(membeli("Tika","Sabun mandi"));

/*
Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenherit dan sebaliknya. 
Ikuti poin-poin dibawah ini:
- Buat sebuah function helper lalu gunakan pada function converternya. 
Jadi kita tinggal membuat function helper dan function utama untuk convert fahrenheit ke Celcius
*/
function subtractByThirtyTwo(number){
    return number - 32;
}; //function helper

function getCelcius(fahrenheit){
    return subtractByThirtyTwo(fahrenheit) * (5/9)
}; //function utama

console.log(getCelcius(41));

/*
Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinya adalah:
- Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia
- Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia
- Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah 4 kali umur manusia. Jadi jika umur kucing saat ini 4 tahun berarti dalam kalendar tahun kucing, umurnya adalah 32 tahun.
Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun manusia.
*/
const hitungUmurKucing = (umurKucing) => {
    if (umurKucing == 1){
        return 15; //1 tahun kucing = 15 tahun manusia
    } else if (umurKucing == 2){
        return 24; //2 tahun kucing = 24 tahun manusia
    } else if (umurKucing >= 3){
        return (umurKucing - 2) * 4 + 24; //setelah 2 tahun, tiap tahun tambah kelipatan 4 tahun manusia
    } else {
        return "Input tidak valid"
    }
};

console.log(hitungUmurKucing(3.5));

/*
Buat sebuah function untuk mengubah format semua string menjadi huruf kecil.
- Menerima 1 parameter string
- Gunakan single line block function
- Output adalah string yang telah diubah formatnya menjadi lower case
- Gunakan built in method string
*/

const ubahHurufKecil = (inputString) => inputString.toLowerCase(); //pakai built ini method

console.log(ubahHurufKecil("BolEh"));

//tidak memakai built in method tapi bukan single line block function
function switchHuruf(huruf){
    switch (huruf){
        case "A":
            return "a";
            break;
        case "B":
            return "b";
            break;
        case "C":
            return "c";
            break;
        case "D":
            return "d";
            break;
        case "E":
            return "e";
            break;
        case "F":
            return "f";
            break;
        case "G":
            return "g";
            break;
        case "H":
            return "h";
            break;
        case "I":
            return "i";
            break;
        case "J":
            return "j";
            break;
        case "K":
            return "k";
            break;
        case "L":
            return "l";
            break;
        case "M":
            return "m";
            break;
        case "N":
            return "n";
            break;
        case "O":
            return "o";
            break;
        case "P":
            return "p";
            break;
        case "Q":
            return "q";
            break;
        case "R":
            return "r";
            break;
        case "S":
            return "s";
            break;
        case "T":
            return "t";
            break;
        case "U":
            return "u";
            break;
        case "V":
            return "v";
            break;
        case "W":
            return "w";
            break;
        case "X":
            return "x";
            break;
        case "Y":
            return "y";
            break;
        case "Z":
            return "z";
            break;
        default :
            return huruf
    }
};

function gantiHuruf(string){
    if(!string || string.length < 1){
        return "";
    }
    let returnString = "";
    for (let i = 0; i < string.length; ++i){
        let word = switchHuruf(string[i]);
        if (word){
            returnString = returnString + switchHuruf(string[i]);
        }
    }
    return returnString;
}

console.log(gantiHuruf("bOleH"));