/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

//aun no funciona correctamente.

var handler = async (m, { text,  usedPrefix, command }) => {

// Función para reclamar la waifu
function reclamarWaifu() {
  // Simulamos un roll de dados para determinar si ganamos la waifu
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // Si el roll es mayor o igual a 50, ganamos la waifu
  if (roll >= 200) {
    m.reply("¡Felicidades! Has ganado la waifu del #rollwaifu");
  } else {
    m.reply("Lo siento, no has ganado la waifu del #rollwaifu. ¡Inténtalo de nuevo!");
  }
}

// Llamamos a la función para reclamar la waifu
reclamarWaifu()}

handler.command = ['c', 'reclamar']
handler.help = ['c']
handler.tags = ['anime']
handler.premium = false
export default handler