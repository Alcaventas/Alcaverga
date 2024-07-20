import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let category = "welcome"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const randomlink = db_.links[category][random]
  const response = await fetch(randomlink)
  const rimg = await response.buffer()
  let imgwelcome = rimg

 // let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `╔═.✵.════ ✰ ════════╗\n{groupMetadata.subject}\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 (𝙰)!!\n┃ @${m.messageStubParameters[0].split`@`[0]}\n┃ 𝙻𝙴𝙰 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 💥\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`
await conn.sendLuffy(m.chat, packname, wm, welcome, imgwelcome, imgwelcome, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `╔═.✵.════ ✰ ════════╗\n- 𝗟𝘂𝗳𝗳𝘆 𝗕𝗼𝘁 - 𝗠𝗗\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ @${m.messageStubParameters[0].split`@`[0]}\n┃ 𝙽𝙾 𝙵𝚄𝙴 𝙳𝙸𝙶𝙽𝙾(𝙰) 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙰𝚀𝚄𝙸 👋🏻\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`
await conn.sendLuffy(m.chat, packname, wm, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `╔═.✵.════ ✰ ════════╗\n- 𝗟𝘂𝗳𝗳𝘆 𝗕𝗼𝘁 - 𝗠𝗗\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ @${m.messageStubParameters[0].split`@`[0]}\n┃ 𝙽𝙾 𝙵𝚄𝙴 𝙳𝙸𝙶𝙽𝙾(𝙰) 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙰𝚀𝚄𝙸 👋🏻\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`
await conn.sendLuffy(m.chat, packname, wm, kick, img, img, redes, fkontak)
}}
