const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let own = `https://wa.me/6283861760785`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya ðððððð¢ ð¶ððð`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let tag = `@${m.sender.replace(/@.+/, '')}`
let str = `*Hai ${tag}*`
let isi =`\n*ðððð¢ð ð±ðð* _á´á´á´Êá´Ê á´Êá´É¢Êá´á´ á´á´á´á´á´á´á´Ê Êá´É´É¢ á´Éªá´á´Êá´É´á´á´É´ á´Éª á´¡Êá´á´sá´á´á´ Êá´É´É¢ á´Êá´sá´s á´ÉªÊá´á´á´ á´É´á´á´á´ á´á´Êá´á´á´á´á´É´ á´á´á´á´Êá´á´á´É´-á´á´á´á´Êá´á´á´É´ á´á´á´á´á´á´Éªs_, *ðððð¢ð ð±ðð* _á´ÉªÊá´É´á´á´É´É¢ sá´á´á´á´Éªá´Éªá´É´ Êá´á´á´ sá´ÊÉªÉ´É¢É¢á´ á´á´á´á´á´ á´ÉªÉ¢á´É´á´á´á´É´ á´á´É´É¢á´É´ É´Êá´á´á´É´, á´á´É´ á´á´á´á´É´É¢á´ÉªÉ´á´É´ á´á´á´ÉªÊÉªá´Éª sá´á´Éªá´Éªá´ Êá´É¢, á´á´á´É´Êá´ ÒÉªá´á´Ê á´á´ÊÉª *ðððð¢ð ð±ðð* ÉªÉ´Éª á´á´É´á´á´ á´á´á´É´ á´á´á´Êá´É´á´á´ á´É´á´á´ á´É´á´á´á´ Êá´Êsá´É´á´É´É¢ sá´É´á´É´É¢, á´ÊÊ_\nðºðððð ð°ðð ðð ð´ðððð ð±ððð ð»ððððððð ðððððð ðºð ð¾ð ððð.\n${own} (ð¾ð ððð)\n`

let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/d8b112bb7ebc8330d8cfd.jpg`, str, isi, 'List Menu', '.command', 'Owner', '.owner', 'Donasi', '.donasi', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y=',
    mediaType: 2, 
    description: urlnya,
    title: "â«¹â«º WhatsApp Bot | By ðððððð¢ ð¶ððð",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y='
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = true

module.exports = handler
