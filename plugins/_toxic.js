let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let salam = fs.readFileSync('./mp3/apaan') 
await conn.sendFile(m.chat, salam, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://chat.whatsapp.com/FAYTO7MzpNrJ8HDyexBZvb',
    mediaType: 2, 
    description: urlnya,
    title: "Jangan kasar kak",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/e74bd57566d12e29a907d.jpg')).buffer(),
   sourceUrl: 'https://chat.whatsapp.com/FAYTO7MzpNrJ8HDyexBZvb',
  }
  } })
}
handler.customPrefix = /^(kontol|bgst|kntl|pepek|mmk|ppk|jnck|anj|bangsat|bangsad|bgsd|ngntd|memek|jembut|jancok|fuck|ajg|anjing|ngentod)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler