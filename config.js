const fs = require("fs")
userbot = {
Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "6285722187094", "6285722187094", "6285722187094", "6285722187094" ],
  MONGO_URI: "mongodb+srv://zanDb:veth0581@cluster0.eyx0e.mongodb.net/<mydb>?retryWrites=true&w=majority",
   mess: {
   wait: "tunggu sedang di proses...",
   api: "Maaf terjadi kesalahan", 
   success: "Berhasil",
   SudahAktif: "Perintah Tersebut Sudah Diaktifkan Sebelumnya.",
   SudahNonaktif: "Perintah Tersebut Sudah Dinonaktifkan Sebelumnya.",
   KhususGrup: "Perintah ini hanya bisa digunakan di Grup",
   KhususPribadi: "Perintah ini hanya bisa digunakan di private message",
   GrupAdmin: "Perintah ini hanya bisa digunakan oleh Admin Grup",
   BotAdmin: "Bot Harus menjadi admin",
   KhususOwner: "Perintah ini hanya dapat digunakan oleh owner bot",
   KhususPremium: "Perintah ini khusus member premium"
   },
   error: {
   Iv: "Link yang kamu berikan tidak valid",
   tombol: "Silahkam Masukkan prameter on/off",
   forget: "Silahkan Masukkan Teks Anda."
   },
   simple: {
   expiredQr: "[!] Scan Kode QR Diatas, Expired dalam 30 detik",
   credentials: "credentials updated!",
   opendocs: "open docs is complete!", 
   readBaileys: "berhasil masuk ke dalam baileys",
   connecting: "Menghubungkan"
   },
   prefix: ["/"],
   gexp: 50,
   limit: 100,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU',
   packname: "B O T  L O R D  R A K H A  S A D B O Y",
   author: 'Lord Rakha Sadboy',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot harus menjadi admin",
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}

module.exports = userbot


