let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6283861760785', '𝚂𝚑𝚎𝚗𝚍𝚢 𝙶𝚊𝚗𝚜', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|cbot)$/i

module.exports = handler
