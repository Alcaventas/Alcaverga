import didyoumean from 'didyoumean'
import similarity from 'similarity'

export async function before(m, { conn, match, usedPrefix, command }) {
	
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let args = noPrefix.trim().split` `.slice(1)
let text = args.join` `
let menu = Object.values(plugins).filter(v => v.menu && !v.disabled).map(v => v.menu).flat(1)
if (help.includes(noPrefix)) return
let mean = didyoumean(noPrefix, help)
let sim = similarity(noPrefix, mean)
let som = sim * 100
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let caption = `😊 El comando no es válido.
> Usa *!menu* para ver los comandos disponibles.`
if (mean) conn.reply(m.chat, caption, m, { mentions: [who]})
}

}