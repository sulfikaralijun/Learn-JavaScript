// mengambil jumlah uang kepada user
const uang = Number(prompt("Masukkan Jumlah Uang: "))
const voucher = prompt("Masukkan kode diskon Jika Ada: ")
let total = uang
if (voucher === 'DISKON50') {
  total -= ((total * 50) / 100)
}

console.log(total)
