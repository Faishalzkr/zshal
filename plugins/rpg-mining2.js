let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let _md = `${Math.floor(Math.random() * 450000)}`.trim()
    let md = (_md * 1)
    let _md2 = `${Math.floor(Math.random() * 20)}`.trim()
    let md2 = (_md2 * 1)
    let _md3 = `${Math.floor(Math.random() * 40)}`.trim()
    let md3 = (_md3 * 1)
    let _md4 = `${Math.floor(Math.random() * 60)}`.trim()
    let md4 = (_md4 * 1)
    let __timers = (new Date - user.lastmining)
    let _timers = (5000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastmining2 > 5000) {
        conn.reply(m.chat, `Saat Menambang Anda Menemukan :\n💸Money :${md}\n🧰Legendary :${md2}\n🛍️Anvered :${md3}\n💎Diamond :${md4}`, m)
        global.db.data.users[m.sender].money += md * 1
        global.db.data.users[m.sender].anvered += md2 * 1
        global.db.data.users[m.sender].legendary += md3 * 1
        global.db.data.users[m.sender].diamond += md4 * 1
        global.db.data.users[m.sender].lastmining = new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, { quoted: m })
    }
}
handler.help = ['mining2', 'min2']
handler.tags = ['rpg']
handler.command = /^(min2|mining2)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,m,s})
  return [m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function button(teks, user) {
    const buttons = []
    
    let mining2 = new Date - user.lastmining2 > 60000
    let claim = new Date - user.lastclaim > 86400000
    let claim2 = new Date - user.lastclaim2 > 86400000
    console.log({mining, claim, claim2})
    
    if (mining2) buttons.push({buttonId: `.mining2`, buttonText: {displayText: 'MINING2'}, type: 1})
    if (claim) buttons.push({buttonId: `.claim`, buttonText: {displayText: 'CLAIM'}, type: 1})
    if (claim2) buttons.push({buttonId: `.claim2`, buttonText: {displayText: 'CLAIM2'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
            text: teks,
            footer: wm,
            buttons: buttons,
            headerType: 1
    }
    
    return buttonMessage
}
