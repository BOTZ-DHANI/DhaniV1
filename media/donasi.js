const fs = require('fs')
const chalk = require('chalk')


exports.donasi = (prefix) => {
return `
*Donasi*

Kakak beneran mau donasi?
Kalau emang beneran mau donasi
Klik tombol di bawah kak🙂
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
