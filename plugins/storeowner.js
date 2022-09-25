const so = "https://telegra.ph/file/1ab56e642439179ea7798.jpg"
let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, so, `
*OWNER MENYEDIAKAN :*

*Jasa Jadi Botz :*
5K 30Bulan
10k Permanen
-Bisa Pakai Sc Sendiri/Sc Saya
-Akun Kebanned Dibuat Baru Lagi Ama Owner
-On 24Jam
-Fast Respon

*Jasa Jadi Botz :*
5k(G Ikut Update) 
10k(Ikut Update) 

*Payment :*
-Dana
-Gopay
-Pulsa(+5k)
`.trim(), wm, 'LANJUT JASARUN BOT', usedPrefix + 'request Mau Beli Jasrun Botz', m) 

handler.help = ['listso']
handler.tags = ['storeowner']
handler.command = /^listso|storeowner|ownerstore$/i

module.exports = handler
