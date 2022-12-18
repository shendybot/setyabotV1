const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {

// this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6283861760785', '𝚂𝚑𝚎𝚗𝚍𝚢 𝙶𝚊𝚗𝚜', fkontak) 
  
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let str =` Halo kak ${tag}⁩ Itu nomor owner ku
*Note:*
• Jangan spam Owner
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp
`
let wibu = `https://telegra.ph/file/d8b112bb7ebc8330d8cfd.jpg`
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm, 'Menu','.menu2', m, { contextInfo: { externalAdReply: { showAdAttribution: true,containsAutoReply: true,
    mediaUrl: "https://facebook.com/sadtime098",
    mediaType: "VIDEO",
    description: "https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y=", 
    title: '⫹⫺ WhatsApp Bot | By 𝚂𝚑𝚎𝚗𝚍𝚢 𝙶𝚊𝚗𝚜',
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
  }
  } }) 
          }
handler.help = ['owner,crator']
handler.tags = ['info']
handler.command =  /^(pengembang|creator|cbot)$/i

module.exports = handler