const fs = require('fs')
const chalk = require('chalk')


exports.rulesbot = (prefix, gayar) => {
return `
*Rules BOT*
${gayar} Dilarang spam bot wajib jeda 5detik
${gayar} Dilarang keras copy paste teks sc bot WhatsApp ini!
${gayar} Dilarang memasukan group ke group lain!
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
