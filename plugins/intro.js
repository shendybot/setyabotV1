const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let krtu =`☰⃟⟣⟔ *Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ* ⟓⟢⃟
┇⃟⟣⟜ *Nama:* 
┇⃟⟣⟜ *Umur:* 
┇⃟⟣⟜ *Alamat:*
┇⃟⟣⟜ *Hobi:*
┇⃟⟣⟜ *Pasangan:*
┖┈┈┈╼╸╸╸╴╴╴ ╳
`
let wibu = `https://telegra.ph/file/d8b112bb7ebc8330d8cfd.jpg`
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'O W N E R','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/sadtime098",
    mediaType: "VIDEO",
    description: "https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y=", 
    title: 'Iɴᴛʀᴏᴄᴀᴅᴜᴛɪᴏɴ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
  }
  } }) 
          }
handler.help = ['intro']
handler.tags = ['info']
handler.command = /^(intro)$/i

module.exports = handler