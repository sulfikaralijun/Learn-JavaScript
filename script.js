// mengambil jumlah uang kepada user
const uang = Number(prompt("Masukkan Jumlah Uang: "))
const voucher = prompt("Masukkan kode diskon Jika Ada: ")
let total = 0
if (voucher === 'DISKON50') {
  total = uang - ((uang * 50) / 100)
} else if (voucher === 'DISKON99') {
  total = uang - ((uang * 99) / 100)
} else {
  total = uang
}

console.log(total)
