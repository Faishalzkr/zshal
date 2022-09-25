const qrku = "https://telegra.ph/file/1ab56e642439179ea7798.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Gopay 」
│ • Tri [0895637941123]
│ • Gopay/Telkom  [081334330434]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62895637941123
│ _Hasil donasi akan digunakan buat sewa_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
