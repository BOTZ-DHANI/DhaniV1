const fs = require('fs')
const chalk = require('chalk')



exports.menu = (prefix, simbol1, gaya01, ucapanWaktu, botname, ownernya, runtime, pushname, me, isPremium, hariini, barat, tengah, timur) => {
return `
*${ucapanWaktu}*

${simbol1}「 IᑎᖴO ᗷOT 」
${gaya01} 𝙱𝚘𝚝 𝙽𝚊𝚖𝚎 : ${botname}
${gaya01} 𝙾𝚠𝚗𝚎𝚛 𝙽𝚊𝚖𝚎 : @${ownernya.split('@')[0]}
${gaya01} 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}

${simbol1}「 IᑎᖴO ᑌᔕEᖇ 」
${gaya01} 𝙽𝚊𝚖𝚊 : ${pushname}
${gaya01} 𝙽𝚞𝚖𝚋𝚎𝚛 : @${me.split('@')[0]}
${gaya01} 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 : ${isPremium ? `Yes` : 'No'}

${simbol1}「 ᗯᗩKTᑌ IᑎᗪOᑎEᔕIᗩ 」
${gaya01} 𝙷𝚊𝚛𝚒 𝙸𝚗𝚒 :
${gaya01} ${hariini}
${gaya01} 𝚃𝚒𝚖𝚎 ${barat} 𝚆𝙸𝙱
${gaya01} 𝚃𝚒𝚖𝚎 ${tengah} 𝚆𝙸𝚃𝙰
${gaya01} 𝚃𝚒𝚖𝚎 ${timur} 𝚆𝙸𝚃
`
}

exports.menu2 = (prefix, simbol2, gaya02) => {
return `
${simbol2} *「 Group Menu 」*
${gaya02} ${prefix}linkgroup
${gaya02} ${prefix}ephemeral [option]
${gaya02} ${prefix}setppgc [image]
${gaya02} ${prefix}setname [text]
${gaya02} ${prefix}setdesc [text]
${gaya02} ${prefix}group [option]
${gaya02} ${prefix}editinfo [option]
${gaya02} ${prefix}add @user
${gaya02} ${prefix}kick @user
${gaya02} ${prefix}hidetag [text]
${gaya02} ${prefix}tagall [text]
${gaya02} ${prefix}antilink [on/off]
${gaya02} ${prefix}antiwame [on/off]
${gaya02} ${prefix}mute [on/off]
${gaya02} ${prefix}promote @user
${gaya02} ${prefix}demote @user

${simbol2} *「 Downloader Menu 」*
${gaya02} ${prefix}tiktoknowm [url]
${gaya02} ${prefix}tiktokwm [url]
${gaya02} ${prefix}tiktokmp3 [url]
${gaya02} ${prefix}ytmp3 [url]
${gaya02} ${prefix}ytmp4 [url]
${gaya02} ${prefix}getmusic [query]
${gaya02} ${prefix}getvideo [query]
${gaya02} ${prefix}play *query*
${gaya02} ${prefix}ytsearch *query*

${simbol2} *「 Convert Menu 」*
${gaya02} ${prefix}attp
${gaya02} ${prefix}ttp
${gaya02} ${prefix}toimage
${gaya02} ${prefix}removebg
${gaya02} ${prefix}sticker
${gaya02} ${prefix}tovideo
${gaya02} ${prefix}togif
${gaya02} ${prefix}tourl
${gaya02} ${prefix}tovn
${gaya02} ${prefix}tomp3
${gaya02} ${prefix}toaudio
${gaya02} ${prefix}toqr
${gaya02} ${prefix}smeme

${simbol2} *「 Kata² Menu 」*
${gaya02} ${prefix}katabijak
${gaya02} ${prefix}katacinta
${gaya02} ${prefix}katailham
${gaya02} ${prefix}katagalau
${gaya02} ${prefix}katabucin
${gaya02} ${prefix}katagombal
${gaya02} ${prefix}katasindiran
${gaya02} ${prefix}katakataimage

${simbol2} *「 Other Menu 」*
${gaya02} ${prefix}puisi
${gaya02} ${prefix}pantun
${gaya02} ${prefix}faktaunik
${gaya02} ${prefix}truthordare

${simbol2} *「 Quotes Menu 」*
${gaya02} ${prefix}quotes
${gaya02} ${prefix}quotesanime
${gaya02} ${prefix}quoteskanye
${gaya02} ${prefix}quotesislami
${gaya02} ${prefix}quotesdilan
${gaya02} ${prefix}quotesff
${gaya02} ${prefix}quotespubg
${gaya02} ${prefix}quoteshacker
${gaya02} ${prefix}quotesimage

${simbol2} *「 Image Menu 」*
${gaya02} ${prefix}ppcouple
${gaya02} ${prefix}darkjokes
${gaya02} ${prefix}meme
${gaya02} ${prefix}renungan
${gaya02} ${prefix}doraemon
${gaya02} ${prefix}pokemon
${gaya02} ${prefix}pentol
${gaya02} ${prefix}kartun
${gaya02} ${prefix}boneka

${simbol2} *「 Maker Menu 」*
${gaya02} ${prefix}girlnekomaker [Teks1|Teks2]
${gaya02} ${prefix}sadboymaker [Teks1|Teks2]
${gaya02} ${prefix}kanekimaker [Teks]
${gaya02} ${prefix}remmaker [Teks]
${gaya02} ${prefix}lolimaker [Teks]
${gaya02} ${prefix}guramaker [Teks]

${simbol2} *「 Story Menu 」*
${gaya02} ${prefix}storysholawat
${gaya02} ${prefix}storytruk
${gaya02} ${prefix}storybus
${gaya02} ${prefix}storymeme
${gaya02} ${prefix}storycogan
${gaya02} ${prefix}storycecan
${gaya02} ${prefix}storyanime
${gaya02} ${prefix}storybucin
${gaya02} ${prefix}storygalau
${gaya02} ${prefix}storywa
${gaya02} ${prefix}storybeatvn
${gaya02} ${prefix}storyff
${gaya02} ${prefix}storyml
${gaya02} ${prefix}storypubg

${simbol2} *「 Sound Menu 」*
${gaya02} ${prefix}sound1
${gaya02} ${prefix}sound2
${gaya02} ${prefix}sound3
${gaya02} ${prefix}sound4
${gaya02} ${prefix}sound5
${gaya02} ${prefix}sound6
${gaya02} ${prefix}sound7
${gaya02} ${prefix}sound8
${gaya02} ${prefix}sound9
${gaya02} ${prefix}sound10
${gaya02} ${prefix}sound11
${gaya02} ${prefix}sound12
${gaya02} ${prefix}sound13
${gaya02} ${prefix}sound14
${gaya02} ${prefix}sound15
${gaya02} ${prefix}sound16
${gaya02} ${prefix}sound17
${gaya02} ${prefix}sound18
${gaya02} ${prefix}sound19
${gaya02} ${prefix}sound20
${gaya02} ${prefix}sound21
${gaya02} ${prefix}sound22
${gaya02} ${prefix}sound23
${gaya02} ${prefix}sound24
${gaya02} ${prefix}sound25
${gaya02} ${prefix}sound26
${gaya02} ${prefix}sound27
${gaya02} ${prefix}sound28
${gaya02} ${prefix}sound29
${gaya02} ${prefix}sound30
${gaya02} ${prefix}sound31
${gaya02} ${prefix}sound32
${gaya02} ${prefix}sound33
${gaya02} ${prefix}sound34
${gaya02} ${prefix}sound35
${gaya02} ${prefix}sound36
${gaya02} ${prefix}sound37
${gaya02} ${prefix}sound38
${gaya02} ${prefix}sound39
${gaya02} ${prefix}sound40
${gaya02} ${prefix}sound41
${gaya02} ${prefix}sound42
${gaya02} ${prefix}sound43
${gaya02} ${prefix}sound44
${gaya02} ${prefix}sound45
${gaya02} ${prefix}sound46
${gaya02} ${prefix}sound47
${gaya02} ${prefix}sound48
${gaya02} ${prefix}sound49
${gaya02} ${prefix}sound50
${gaya02} ${prefix}sound51
${gaya02} ${prefix}sound52
${gaya02} ${prefix}sound53
${gaya02} ${prefix}sound54
${gaya02} ${prefix}sound55
${gaya02} ${prefix}sound56
${gaya02} ${prefix}sound57
${gaya02} ${prefix}sound58
${gaya02} ${prefix}sound59
${gaya02} ${prefix}sound60
${gaya02} ${prefix}sound61
${gaya02} ${prefix}sound62
${gaya02} ${prefix}sound63
${gaya02} ${prefix}sound64
${gaya02} ${prefix}sound65
${gaya02} ${prefix}sound66
${gaya02} ${prefix}sound67
${gaya02} ${prefix}sound68
${gaya02} ${prefix}sound69
${gaya02} ${prefix}sound70
${gaya02} ${prefix}sound71
${gaya02} ${prefix}sound72
${gaya02} ${prefix}sound73
${gaya02} ${prefix}sound74
${gaya02} ${prefix}sound75
${gaya02} ${prefix}sound76
${gaya02} ${prefix}sound77
${gaya02} ${prefix}sound78
${gaya02} ${prefix}sound79
${gaya02} ${prefix}sound80
${gaya02} ${prefix}sound81
${gaya02} ${prefix}sound82
${gaya02} ${prefix}sound83
${gaya02} ${prefix}sound84
${gaya02} ${prefix}sound85
${gaya02} ${prefix}sound86
${gaya02} ${prefix}sound87
${gaya02} ${prefix}sound88
${gaya02} ${prefix}sound89
${gaya02} ${prefix}sound90
${gaya02} ${prefix}sound91
${gaya02} ${prefix}sound92
${gaya02} ${prefix}sound93
${gaya02} ${prefix}sound94
${gaya02} ${prefix}sound95
${gaya02} ${prefix}sound96
${gaya02} ${prefix}sound97
${gaya02} ${prefix}sound98
${gaya02} ${prefix}sound99
${gaya02} ${prefix}sound100
${gaya02} ${prefix}sound101
${gaya02} ${prefix}sound102
${gaya02} ${prefix}sound103
${gaya02} ${prefix}sound104
${gaya02} ${prefix}sound105
${gaya02} ${prefix}sound106
${gaya02} ${prefix}sound107
${gaya02} ${prefix}sound108
${gaya02} ${prefix}sound109
${gaya02} ${prefix}sound110
${gaya02} ${prefix}sound111
${gaya02} ${prefix}sound112
${gaya02} ${prefix}sound113
${gaya02} ${prefix}sound114
${gaya02} ${prefix}sound115
${gaya02} ${prefix}sound116
${gaya02} ${prefix}sound117
${gaya02} ${prefix}sound118
${gaya02} ${prefix}sound119
${gaya02} ${prefix}sound120
${gaya02} ${prefix}sound121
${gaya02} ${prefix}sound122
${gaya02} ${prefix}sound123
${gaya02} ${prefix}sound124
${gaya02} ${prefix}sound125
${gaya02} ${prefix}sound126
${gaya02} ${prefix}sound127
${gaya02} ${prefix}sound128
${gaya02} ${prefix}sound129
${gaya02} ${prefix}sound130
${gaya02} ${prefix}sound131
${gaya02} ${prefix}sound132
${gaya02} ${prefix}sound133
${gaya02} ${prefix}sound134
${gaya02} ${prefix}sound135
${gaya02} ${prefix}sound136
${gaya02} ${prefix}sound137
${gaya02} ${prefix}sound138
${gaya02} ${prefix}sound139
${gaya02} ${prefix}sound140
${gaya02} ${prefix}sound141
${gaya02} ${prefix}sound142
${gaya02} ${prefix}sound143
${gaya02} ${prefix}sound144
${gaya02} ${prefix}sound145
${gaya02} ${prefix}sound146
${gaya02} ${prefix}sound147
${gaya02} ${prefix}sound148
${gaya02} ${prefix}sound149
${gaya02} ${prefix}sound150
${gaya02} ${prefix}sound151
${gaya02} ${prefix}sound152
${gaya02} ${prefix}sound153
${gaya02} ${prefix}sound154
${gaya02} ${prefix}sound155
${gaya02} ${prefix}sound156
${gaya02} ${prefix}sound157
${gaya02} ${prefix}sound158
${gaya02} ${prefix}sound159

${simbol2} *「 Cerpen Menu 」*
${gaya02} ${prefix}cerpen-anak
${gaya02} ${prefix}cerpen-bahasadaerah
${gaya02} ${prefix}cerpen-bahasainggris
${gaya02} ${prefix}cerpen-bahasajawa
${gaya02} ${prefix}cerpen-bahasasunda
${gaya02} ${prefix}cerpen-budaya
${gaya02} ${prefix}cerpen-cinta
${gaya02} ${prefix}cerpen-cintaislami
${gaya02} ${prefix}cerpen-cintapertama
${gaya02} ${prefix}cerpen-cintaromantis
${gaya02} ${prefix}cerpen-cintahsedih
${gaya02} ${prefix}cerpen-cintasegitiga
${gaya02} ${prefix}cerpen-cintasejati
${gaya02} ${prefix}cerpen-galau
${gaya02} ${prefix}cerpen-gokil
${gaya02} ${prefix}cerpen-inspiratif
${gaya02} ${prefix}cerpen-jepang
${gaya02} ${prefix}cerpen-kehidupan
${gaya02} ${prefix}cerpen-keluarga
${gaya02} ${prefix}cerpen-kisahnyata
${gaya02} ${prefix}cerpen-korea
${gaya02} ${prefix}cerpen-kristen
${gaya02} ${prefix}cerpen-liburan
${gaya02} ${prefix}cerpen-malaysia
${gaya02} ${prefix}cerpen-mengharukan
${gaya02} ${prefix}cerpen-misteri
${gaya02} ${prefix}cerpen-motivasi
${gaya02} ${prefix}cerpen-nasihat
${gaya02} ${prefix}cerpen-nasionalisme
${gaya02} ${prefix}cerpen-olahraga
${gaya02} ${prefix}cerpen-patahhati
${gaya02} ${prefix}cerpen-penantian
${gaya02} ${prefix}cerpen-pendidikan
${gaya02} ${prefix}cerpen-pengalaman
${gaya02} ${prefix}cerpen-pengorbanan
${gaya02} ${prefix}cerpen-penyesalan
${gaya02} ${prefix}cerpen-perjuangan
${gaya02} ${prefix}cerpen-perpisahan
${gaya02} ${prefix}cerpen-persahabatan
${gaya02} ${prefix}cerpen-petualangan
${gaya02} ${prefix}cerpen-ramadhan
${gaya02} ${prefix}cerpen-remaja
${gaya02} ${prefix}cerpen-rindu
${gaya02} ${prefix}cerpen-rohani
${gaya02} ${prefix}cerpen-romantis
${gaya02} ${prefix}cerpen-sastra
${gaya02} ${prefix}cerpen-sedih
${gaya02} ${prefix}cerpen-sejarah

${simbol2} *「 Bot Menu 」*
${gaya02} ${prefix}ping
${gaya02} ${prefix}owner
${gaya02} ${prefix}report
${gaya02} ${prefix}menu / ${prefix}help / ${prefix}?
${gaya02} ${prefix}delete
${gaya02} ${prefix}infochat
${gaya02} ${prefix}quoted
${gaya02} ${prefix}listonline
${gaya02} ${prefix}speedtest
${gaya02} ${prefix}menfes
${gaya02} ${prefix}runtime
${gaya02} ${prefix}request
${gaya02} ${prefix}allqr
${gaya02} ${prefix}sc
${gaya02} ${prefix}listban
${gaya02} ${prefix}listprem

${simbol2} *「 Database Menu 」*
${gaya02} ${prefix}setcmd
${gaya02} ${prefix}listcmd
${gaya02} ${prefix}delcmd
${gaya02} ${prefix}lockcmd
${gaya02} ${prefix}addmsg
${gaya02} ${prefix}listmsg
${gaya02} ${prefix}getmsg
${gaya02} ${prefix}delmsg

${simbol2} *「 Anonymous Menu 」*
${gaya02} ${prefix}anonymous
${gaya02} ${prefix}start
${gaya02} ${prefix}next
${gaya02} ${prefix}keluar

${simbol2} *「 Owner Menu 」*
${gaya02} ${prefix}leave
${gaya02} ${prefix}setexif
${gaya02} ${prefix}listpc
${gaya02} ${prefix}listgc
${gaya02} ${prefix}react [emoji]
${gaya02} ${prefix}chat [option]
${gaya02} ${prefix}join [link]
${gaya02} ${prefix}block @user
${gaya02} ${prefix}unblock @user
${gaya02} ${prefix}bcgroup [text]
${gaya02} ${prefix}bcall [text]
${gaya02} ${prefix}setppbot [image]
${gaya02} ${prefix}ban [628xx]
${gaya02} ${prefix}unban [628xx]
${gaya02} ${prefix}addprem [628xx]
${gaya02} ${prefix}dellprem [628xx]
`
}

exports.mgroup = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Group Menu 」*
${gaya03} ${prefix}linkgroup
${gaya03} ${prefix}ephemeral [option]
${gaya03} ${prefix}setppgc [image]
${gaya03} ${prefix}setname [text]
${gaya03} ${prefix}setdesc [text]
${gaya03} ${prefix}group [option]
${gaya03} ${prefix}editinfo [option]
${gaya03} ${prefix}add @user
${gaya03} ${prefix}kick @user
${gaya03} ${prefix}hidetag [text]
${gaya03} ${prefix}tagall [text]
${gaya03} ${prefix}antilink [on/off]
${gaya03} ${prefix}antiwame [on/off]
${gaya03} ${prefix}mute [on/off]
${gaya03} ${prefix}promote @user
${gaya03} ${prefix}demote @user
`
}
exports.mdownload = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Downloader Menu 」*
${gaya03} ${prefix}tiktoknowm [url]
${gaya03} ${prefix}tiktokwm [url]
${gaya03} ${prefix}tiktokmp3 [url]
${gaya03} ${prefix}ytmp3 [url]
${gaya03} ${prefix}ytmp4 [url]
${gaya03} ${prefix}getmusic [query]
${gaya03} ${prefix}getvideo [query]
${gaya03} ${prefix}play *query*
${gaya03} ${prefix}ytsearch *query*
`
}
exports.mconvert = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Convert Menu 」*
${gaya03} ${prefix}attp
${gaya03} ${prefix}ttp
${gaya03} ${prefix}toimage
${gaya03} ${prefix}removebg
${gaya03} ${prefix}sticker
${gaya03} ${prefix}tovideo
${gaya03} ${prefix}togif
${gaya03} ${prefix}tourl
${gaya03} ${prefix}tovn
${gaya03} ${prefix}tomp3
${gaya03} ${prefix}toaudio
${gaya03} ${prefix}toqr
${gaya03} ${prefix}smeme
`
}
exports.mkatakata = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Kata² Menu 」*
${gaya03} ${prefix}katabijak
${gaya03} ${prefix}katacinta
${gaya03} ${prefix}katailham
${gaya03} ${prefix}katagalau
${gaya03} ${prefix}katabucin
${gaya03} ${prefix}katagombal
${gaya03} ${prefix}katasindiran
${gaya03} ${prefix}katakataimage
`
}
exports.mother = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Other Menu 」*
${gaya03} ${prefix}cerpen
${gaya03} ${prefix}puisi
${gaya03} ${prefix}pantun
${gaya03} ${prefix}faktaunik
${gaya03} ${prefix}truthordare
`
}
exports.mquts = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Quotes Menu 」*
${gaya03} ${prefix}quotes
${gaya03} ${prefix}quotesanime
${gaya03} ${prefix}quoteskanye
${gaya03} ${prefix}quotesislami
${gaya03} ${prefix}quotesdilan
${gaya03} ${prefix}quotesff
${gaya03} ${prefix}quotespubg
${gaya03} ${prefix}quoteshacker
${gaya03} ${prefix}quotesimage
`
}
exports.mimage = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Image Menu 」*
${gaya03} ${prefix}ppcouple
${gaya03} ${prefix}darkjokes
${gaya03} ${prefix}meme
${gaya03} ${prefix}renungan
${gaya03} ${prefix}doraemon
${gaya03} ${prefix}pokemon
${gaya03} ${prefix}pentol
${gaya03} ${prefix}kartun
${gaya03} ${prefix}boneka
`
}
exports.mmaker = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Maker Menu 」*
${gaya03} ${prefix}girlnekomaker [Teks1|Teks2]
${gaya03} ${prefix}sadboymaker [Teks1|Teks2]
${gaya03} ${prefix}kanekimaker [Teks]
${gaya03} ${prefix}remmaker [Teks]
${gaya03} ${prefix}lolimaker [Teks]
${gaya03} ${prefix}guramaker [Teks]
`
}
exports.mstory = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Story Menu 」*
${gaya03} ${prefix}storysholawat
${gaya03} ${prefix}storytruk
${gaya03} ${prefix}storybus
${gaya03} ${prefix}storymeme
${gaya03} ${prefix}storycogan
${gaya03} ${prefix}storycecan
${gaya03} ${prefix}storyanime
${gaya03} ${prefix}storybucin
${gaya03} ${prefix}storygalau
${gaya03} ${prefix}storywa
${gaya03} ${prefix}storybeatvn
${gaya03} ${prefix}storyff
${gaya03} ${prefix}storyml
${gaya03} ${prefix}storypubg
`
}
exports.msound = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Sound Menu 」*
${gaya03} ${prefix}sound1
${gaya03} ${prefix}sound2
${gaya03} ${prefix}sound3
${gaya03} ${prefix}sound4
${gaya03} ${prefix}sound5
${gaya03} ${prefix}sound6
${gaya03} ${prefix}sound7
${gaya03} ${prefix}sound8
${gaya03} ${prefix}sound9
${gaya03} ${prefix}sound10
${gaya03} ${prefix}sound11
${gaya03} ${prefix}sound12
${gaya03} ${prefix}sound13
${gaya03} ${prefix}sound14
${gaya03} ${prefix}sound15
${gaya03} ${prefix}sound16
${gaya03} ${prefix}sound17
${gaya03} ${prefix}sound18
${gaya03} ${prefix}sound19
${gaya03} ${prefix}sound20
${gaya03} ${prefix}sound21
${gaya03} ${prefix}sound22
${gaya03} ${prefix}sound23
${gaya03} ${prefix}sound24
${gaya03} ${prefix}sound25
${gaya03} ${prefix}sound26
${gaya03} ${prefix}sound27
${gaya03} ${prefix}sound28
${gaya03} ${prefix}sound29
${gaya03} ${prefix}sound30
${gaya03} ${prefix}sound31
${gaya03} ${prefix}sound32
${gaya03} ${prefix}sound33
${gaya03} ${prefix}sound34
${gaya03} ${prefix}sound35
${gaya03} ${prefix}sound36
${gaya03} ${prefix}sound37
${gaya03} ${prefix}sound38
${gaya03} ${prefix}sound39
${gaya03} ${prefix}sound40
${gaya03} ${prefix}sound41
${gaya03} ${prefix}sound42
${gaya03} ${prefix}sound43
${gaya03} ${prefix}sound44
${gaya03} ${prefix}sound45
${gaya03} ${prefix}sound46
${gaya03} ${prefix}sound47
${gaya03} ${prefix}sound48
${gaya03} ${prefix}sound49
${gaya03} ${prefix}sound50
${gaya03} ${prefix}sound51
${gaya03} ${prefix}sound52
${gaya03} ${prefix}sound53
${gaya03} ${prefix}sound54
${gaya03} ${prefix}sound55
${gaya03} ${prefix}sound56
${gaya03} ${prefix}sound57
${gaya03} ${prefix}sound58
${gaya03} ${prefix}sound59
${gaya03} ${prefix}sound60
${gaya03} ${prefix}sound61
${gaya03} ${prefix}sound62
${gaya03} ${prefix}sound63
${gaya03} ${prefix}sound64
${gaya03} ${prefix}sound65
${gaya03} ${prefix}sound66
${gaya03} ${prefix}sound67
${gaya03} ${prefix}sound68
${gaya03} ${prefix}sound69
${gaya03} ${prefix}sound70
${gaya03} ${prefix}sound71
${gaya03} ${prefix}sound72
${gaya03} ${prefix}sound73
${gaya03} ${prefix}sound74
${gaya03} ${prefix}sound75
${gaya03} ${prefix}sound76
${gaya03} ${prefix}sound77
${gaya03} ${prefix}sound78
${gaya03} ${prefix}sound79
${gaya03} ${prefix}sound80
${gaya03} ${prefix}sound81
${gaya03} ${prefix}sound82
${gaya03} ${prefix}sound83
${gaya03} ${prefix}sound84
${gaya03} ${prefix}sound85
${gaya03} ${prefix}sound86
${gaya03} ${prefix}sound87
${gaya03} ${prefix}sound88
${gaya03} ${prefix}sound89
${gaya03} ${prefix}sound90
${gaya03} ${prefix}sound91
${gaya03} ${prefix}sound92
${gaya03} ${prefix}sound93
${gaya03} ${prefix}sound94
${gaya03} ${prefix}sound95
${gaya03} ${prefix}sound96
${gaya03} ${prefix}sound97
${gaya03} ${prefix}sound98
${gaya03} ${prefix}sound99
${gaya03} ${prefix}sound100
${gaya03} ${prefix}sound101
${gaya03} ${prefix}sound103
${gaya03} ${prefix}sound103
${gaya03} ${prefix}sound104
${gaya03} ${prefix}sound105
${gaya03} ${prefix}sound106
${gaya03} ${prefix}sound107
${gaya03} ${prefix}sound108
${gaya03} ${prefix}sound109
${gaya03} ${prefix}sound110
${gaya03} ${prefix}sound111
${gaya03} ${prefix}sound112
${gaya03} ${prefix}sound113
${gaya03} ${prefix}sound114
${gaya03} ${prefix}sound115
${gaya03} ${prefix}sound116
${gaya03} ${prefix}sound117
${gaya03} ${prefix}sound118
${gaya03} ${prefix}sound119
${gaya03} ${prefix}sound120
${gaya03} ${prefix}sound121
${gaya03} ${prefix}sound122
${gaya03} ${prefix}sound123
${gaya03} ${prefix}sound124
${gaya03} ${prefix}sound125
${gaya03} ${prefix}sound126
${gaya03} ${prefix}sound127
${gaya03} ${prefix}sound128
${gaya03} ${prefix}sound129
${gaya03} ${prefix}sound130
${gaya03} ${prefix}sound131
${gaya03} ${prefix}sound132
${gaya03} ${prefix}sound133
${gaya03} ${prefix}sound134
${gaya03} ${prefix}sound135
${gaya03} ${prefix}sound136
${gaya03} ${prefix}sound137
${gaya03} ${prefix}sound138
${gaya03} ${prefix}sound139
${gaya03} ${prefix}sound140
${gaya03} ${prefix}sound141
${gaya03} ${prefix}sound142
${gaya03} ${prefix}sound143
${gaya03} ${prefix}sound144
${gaya03} ${prefix}sound145
${gaya03} ${prefix}sound146
${gaya03} ${prefix}sound147
${gaya03} ${prefix}sound148
${gaya03} ${prefix}sound149
${gaya03} ${prefix}sound150
${gaya03} ${prefix}sound151
${gaya03} ${prefix}sound152
${gaya03} ${prefix}sound153
${gaya03} ${prefix}sound154
${gaya03} ${prefix}sound155
${gaya03} ${prefix}sound156
${gaya03} ${prefix}sound157
${gaya03} ${prefix}sound158
${gaya03} ${prefix}sound159
`
}
exports.mcerpen = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Cerpen Menu 」*
${gaya03} ${prefix}cerpen-anak
${gaya03} ${prefix}cerpen-bahasadaerah
${gaya03} ${prefix}cerpen-bahasainggris
${gaya03} ${prefix}cerpen-bahasajawa
${gaya03} ${prefix}cerpen-bahasasunda
${gaya03} ${prefix}cerpen-budaya
${gaya03} ${prefix}cerpen-cinta
${gaya03} ${prefix}cerpen-cintaislami
${gaya03} ${prefix}cerpen-cintapertama
${gaya03} ${prefix}cerpen-cintaromantis
${gaya03} ${prefix}cerpen-cintahsedih
${gaya03} ${prefix}cerpen-cintasegitiga
${gaya03} ${prefix}cerpen-cintasejati
${gaya03} ${prefix}cerpen-galau
${gaya03} ${prefix}cerpen-gokil
${gaya03} ${prefix}cerpen-inspiratif
${gaya03} ${prefix}cerpen-jepang
${gaya03} ${prefix}cerpen-kehidupan
${gaya03} ${prefix}cerpen-keluarga
${gaya03} ${prefix}cerpen-kisahnyata
${gaya03} ${prefix}cerpen-korea
${gaya03} ${prefix}cerpen-kristen
${gaya03} ${prefix}cerpen-liburan
${gaya03} ${prefix}cerpen-malaysia
${gaya03} ${prefix}cerpen-mengharukan
${gaya03} ${prefix}cerpen-misteri
${gaya03} ${prefix}cerpen-motivasi
${gaya03} ${prefix}cerpen-nasihat
${gaya03} ${prefix}cerpen-nasionalisme
${gaya03} ${prefix}cerpen-olahraga
${gaya03} ${prefix}cerpen-patahhati
${gaya03} ${prefix}cerpen-penantian
${gaya03} ${prefix}cerpen-pendidikan
${gaya03} ${prefix}cerpen-pengalaman
${gaya03} ${prefix}cerpen-pengorbanan
${gaya03} ${prefix}cerpen-penyesalan
${gaya03} ${prefix}cerpen-perjuangan
${gaya03} ${prefix}cerpen-perpisahan
${gaya03} ${prefix}cerpen-persahabatan
${gaya03} ${prefix}cerpen-petualangan
${gaya03} ${prefix}cerpen-ramadhan
${gaya03} ${prefix}cerpen-remaja
${gaya03} ${prefix}cerpen-rindu
${gaya03} ${prefix}cerpen-rohani
${gaya03} ${prefix}cerpen-romantis
${gaya03} ${prefix}cerpen-sastra
${gaya03} ${prefix}cerpen-sedih
${gaya03} ${prefix}cerpen-sejarah
`
}
exports.mbot = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Bot Menu 」*
${gaya03} ${prefix}ping
${gaya03} ${prefix}owner
${gaya03} ${prefix}report
${gaya03} ${prefix}menu / ${prefix}help / ${prefix}?
${gaya03} ${prefix}delete
${gaya03} ${prefix}infochat
${gaya03} ${prefix}quoted
${gaya03} ${prefix}listonline
${gaya03} ${prefix}speedtest
${gaya03} ${prefix}menfes
${gaya03} ${prefix}runtime
${gaya03} ${prefix}request
${gaya03} ${prefix}allqr
${gaya03} ${prefix}sc
${gaya03} ${prefix}listban
${gaya03} ${prefix}listprem
`
}
exports.mdatabase = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Database Menu 」*
${gaya03} ${prefix}setcmd
${gaya03} ${prefix}listcmd
${gaya03} ${prefix}delcmd
${gaya03} ${prefix}lockcmd
${gaya03} ${prefix}addmsg
${gaya03} ${prefix}listmsg
${gaya03} ${prefix}getmsg
${gaya03} ${prefix}delmsg
`
}
exports.manonymous = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Anonymous Menu 」*
${gaya03} ${prefix}anonymous
${gaya03} ${prefix}start
${gaya03} ${prefix}next
${gaya03} ${prefix}keluar
`
}
exports.mowner = (prefix, simbol3, gaya03) => {
return `
${simbol3} *「 Owner Menu 」*
${gaya03} ${prefix}leave
${gaya03} ${prefix}setexif
${gaya03} ${prefix}listpc
${gaya03} ${prefix}listgc
${gaya03} ${prefix}react [emoji]
${gaya03} ${prefix}chat [option]
${gaya03} ${prefix}join [link]
${gaya03} ${prefix}block @user
${gaya03} ${prefix}unblock @user
${gaya03} ${prefix}bcgroup [text]
${gaya03} ${prefix}bcall [text]
${gaya03} ${prefix}setppbot [image]
${gaya03} ${prefix}ban [628xx]
${gaya03} ${prefix}unban [628xx]
${gaya03} ${prefix}addprem [628xx]
${gaya03} ${prefix}dellprem [628xx]
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
