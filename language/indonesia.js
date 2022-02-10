exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `〈⏳〉 Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `〈☺️〉 Done. Oke kak~`
}

exports.err = () => {
    return `〈⚠️〉 Fitur Sedang Error`
}
exports.erorLink = () => {
    return `〈⚠️〉 Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah 〈❎〉 Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `〈❎〉 Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `〈❎〉 Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `〈❎〉 Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `〈✅〉 Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `〈👥〉 Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `〈🙅〉 Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `〈 HALL OF SHAME 〉
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `〈❎〉 User bukan seorang admin! 〈❎〉`
}

exports.adminAlready = () => {
    return `〈❎〉 Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname) =>{
return`Hai kak ${pushname} 👋 
Selamat ${salam}, saya 𝐾𝑒𝑦𝑜𝑙𝑏𝑜𝑡-𝑀𝑑
Bot ini adalah Beta Multi-Device Whatsapp.
Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya
Lapor owner agar segera di perbaiki 🙏
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
	
return `*🔭 Selamat ${salam} ${pushname}*
*⌚ Time Server : ${time}*
*📚 List-Menu 𝐾𝑒𝑦𝑜𝑙𝑏𝑜𝑡-𝑀𝑑 :*


╭⌬〔 BOT INFO 〕
│» ${prefix}owner
│» ${prefix}rules
│» ${prefix}ping
│» ${prefix}runtime
│» ${prefix}botstatus
│» ${prefix}donate
│» ${prefix}partner
╰⌬

╭⌬〔 OWNER 〕
│» < evaluate
│» > evaluate
│» $ exec
│» => exec
│» ${prefix}setmenu 〈query〉
│» ${prefix}setmenu templateLocation
│» ${prefix}setmenu templateTenor
│» ${prefix}sendsesi
│» ${prefix}listpc
│» ${prefix}listgc
│» ${prefix}broadcast 〈text〉
│» ${prefix}bc 〈text〉
│» ${prefix}bcgc 〈text〉
│» ${prefix}nsfw 〈on/off〉
│» ${prefix}antiviewonce 〈on/off〉
│» ${prefix}join 〈link〉
│» ${prefix}self
│» ${prefix}public 〈only bot〉
│» ${prefix}del 〈reply pesan bot〉
│» ${prefix}setppbot 〈reply foto〉
╰⌬

╭⌬〔 DATABASE 〕
│» ${prefix}setcmd 〈reply stiker〉
│» ${prefix}delcmd 〈reply stiker〉
│» ${prefix}listcmd
│» ${prefix}absen
│» ${prefix}cekabsen
│» ${prefix}deleteabsen
│» ${prefix}absenstart
│» ${prefix}addmsg 〈nama file〉
│» ${prefix}getmsg 〈nama file〉
│» ${prefix}listmsg
│» ${prefix}delmsg 〈nama file〉
╰⌬

╭⌬〔 GROUP 〕
│» ${prefix}antilink 〈on/off〉
│» ${prefix}setppgrup 〈reply foto〉
│» ${prefix}group 〈open/close〉
│» ${prefix}setdesk 〈text〉
│» ${prefix}add 〈62***〉
│» ${prefix}kick @tag
│» ${prefix}promote 〈@tag/reply〉
│» ${prefix}demote 〈@tag/reply〉
│» ${prefix}linkgc
│» ${prefix}revoke
│» ${prefix}infochat
│» ${prefix}leave
│» ${prefix}listonline
│» ${prefix}sider
│» ${prefix}tagall 〈text〉
│» ${prefix}hidetag 〈text〉
╰⌬

╭⌬〔 ANIME 〕
│» ${prefix}quotesanime
│» ${prefix}anime 〈query〉
│» ${prefix}manga 〈query〉
│» ${prefix}character 〈query〉
╰⌬

╭⌬〔 TAG 〕
│» ${prefix}stickertag
│» ${prefix}videotag 〈query〉
│» ${prefix}vntag 〈query〉
│» ${prefix}imagetag 〈query〉
╰⌬

╭⌬〔 STALKING 〕
│» ${prefix}igstalk 〈username〉
│» ${prefix}ghstalk 〈username〉
│» ${prefix}ytstalk 〈channel〉
╰⌬

╭⌬〔 SEARCH 〕
│» ${prefix}ytsearch 〈query〉
│» ${prefix}wallpaper 〈query〉
│» ${prefix}wikimedia 〈query〉
│» ${prefix}hentai
│» ${prefix}wattpad 〈query〉
│» ${prefix}webtoons 〈query〉
│» ${prefix}drakor 〈query〉
│» ${prefix}pinterest 〈query〉
╰⌬

╭⌬〔 CONVERTER 〕
│» ${prefix}stiker 〈reply foto〉
│» ${prefix}tourl 〈reply foto/video〉
│» ${prefix}togif 〈reply sticker〉
│» ${prefix}tomp4 〈reply sticker〉
│» ${prefix}toimg 〈reply sticker〉
│» ${prefix}removebg 〈reply foto〉
│» ${prefix}emojimix 〈🤔+😱〉
╰⌬

╭⌬〔 IMAGE EFFECT 〕
│» ${prefix}wanted 〈reply foto/stiker〉
│» ${prefix}utatoo 〈reply foto/stiker〉
│» ${prefix}unsharpen 〈reply foto/stiker〉
│» ${prefix}thanos 〈reply foto/stiker〉
│» ${prefix}sniper 〈reply foto/stiker〉
│» ${prefix}sharpen 〈reply foto/stiker〉
│» ${prefix}sepia 〈reply foto/stiker〉
│» ${prefix}scary 〈reply foto/stiker〉
│» ${prefix}rip 〈reply foto/stiker〉
│» ${prefix}redple 〈reply foto/stiker〉
│» ${prefix}rejected 〈reply foto/stiker〉
│» ${prefix}posterize 〈reply foto/stiker〉
│» ${prefix}ps4 〈reply foto/stiker〉
│» ${prefix}pixelize 〈reply foto/stiker〉
│» ${prefix}missionpassed 〈reply foto/stiker〉
│» ${prefix}moustache 〈reply foto/stiker〉
│» ${prefix}lookwhatkarenhave 〈reply foto/stiker〉
│» ${prefix}jail 〈reply foto/stiker〉
│» ${prefix}invert 〈reply foto/stiker〉
│» ${prefix}instagram 〈reply foto/stiker〉
│» ${prefix}greyscale 〈reply foto/stiker〉
│» ${prefix}glitch 〈reply foto/stiker〉
│» ${prefix}gay 〈reply foto/stiker〉
│» ${prefix}frame 〈reply foto/stiker〉
│» ${prefix}fire 〈reply foto/stiker〉
│» ${prefix}distort 〈reply foto/stiker〉
│» ${prefix}dictator 〈reply foto/stiker〉
│» ${prefix}deepfry 〈reply foto/stiker〉
│» ${prefix}ddungeon 〈reply foto/stiker〉
│» ${prefix}circle 〈reply foto/stiker〉
│» ${prefix}challenger 〈reply foto/stiker〉
│» ${prefix}burn 〈reply foto/stiker〉
│» ${prefix}brazzers 〈reply foto/stiker〉
│» ${prefix}beautiful 〈reply foto/stiker〉
╰⌬

╭⌬〔 STICKER EFFECT 〕
│» ${prefix}jail 〈reply foto/stiker〉
│» ${prefix}red 〈reply foto/stiker〉
│» ${prefix}gay 〈reply foto/stiker〉
│» ${prefix}bloo 〈reply foto/stiker〉
│» ${prefix}blue 〈reply foto/stiker〉
│» ${prefix}sepia 〈reply foto/stiker〉
│» ${prefix}green 〈reply foto/stiker〉
│» ${prefix}glass 〈reply foto/stiker〉
│» ${prefix}invert 〈reply foto/stiker〉
│» ${prefix}blurple 〈reply foto/stiker〉
│» ${prefix}blurple2 〈reply foto/stiker〉
│» ${prefix}wasted 〈reply foto/stiker〉
│» ${prefix}passed 〈reply foto/stiker〉
│» ${prefix}triggered 〈reply foto/stiker〉
│» ${prefix}comrade 〈reply foto/stiker〉
│» ${prefix}greyscale 〈reply foto/stiker〉
│» ${prefix}threshold 〈reply foto/stiker〉
│» ${prefix}brightness 〈reply foto/stiker〉
│» ${prefix}invertgreyscale 〈reply foto/stiker〉
╰⌬

╭⌬〔 DOWNLOAD 〕
│» ${prefix}tiktok 〈link〉
│» ${prefix}tiktoknowm 〈link〉
│» ${prefix}tiktokwm 〈link〉
│» ${prefix}tiktokaudio 〈link〉
│» ${prefix}ytdl 〈link〉
│» ${prefix}play 〈query〉
│» ${prefix}ytmp3 〈link〉
│» ${prefix}ytshortmp3 〈link〉
│» ${prefix}ytmp4 〈link〉
│» ${prefix}ytshorts 〈link〉
│» ${prefix}facebook 〈link〉
│» ${prefix}facebooksd 〈link〉
│» ${prefix}facebookhd 〈link〉
│» ${prefix}fbaudio 〈link〉
│» ${prefix}igstory 〈username〉
│» ${prefix}igdl 〈link〉
│» ${prefix}igphoto 〈link〉
│» ${prefix}igvideo 〈link〉
│» ${prefix}igreels 〈link〉
│» ${prefix}igtv 〈link〉
│» ${prefix}soundcloud 〈link〉
│» ${prefix}gitclone 〈link repo〉
│» ${prefix}mediafire 〈link〉
│» ${prefix}twitter link
╰⌬

╭⌬〔 RANDOM ANIME 〕
│» ${prefix}loli
│» ${prefix}neko
│» ${prefix}waifu
│» ${prefix}shinobu
│» ${prefix}megumin
│» ${prefix}bully
│» ${prefix}cuddle
│» ${prefix}cry
│» ${prefix}hug
│» ${prefix}awoo
│» ${prefix}kiss
│» ${prefix}lick
│» ${prefix}pat
│» ${prefix}smug
│» ${prefix}bonk
│» ${prefix}yeet
│» ${prefix}blush
│» ${prefix}smile
│» ${prefix}wave
│» ${prefix}highfive
│» ${prefix}handhold
│» ${prefix}nom
│» ${prefix}bite
│» ${prefix}glomp
│» ${prefix}slap
│» ${prefix}kill
│» ${prefix}happy
│» ${prefix}wink
│» ${prefix}poke
│» ${prefix}dance
│» ${prefix}cringe
╰⌬

╭⌬〔 NSFW & SFW 〕
│» ${prefix}ahegao
│» ${prefix}ass
│» ${prefix}bdsm
│» ${prefix}blowjob
│» ${prefix}cuckold
│» ${prefix}cum
│» ${prefix}ero
│» ${prefix}femdom
│» ${prefix}foot
│» ${prefix}gangbang
│» ${prefix}glasses
│» ${prefix}jahy
│» ${prefix}manga
│» ${prefix}masturbation
│» ${prefix}neko
│» ${prefix}orgy
│» ${prefix}panties
│» ${prefix}pussy
│» ${prefix}tentacles
│» ${prefix}thighs
│» ${prefix}yuri
│» ${prefix}feet
│» ${prefix}lewdkemo
│» ${prefix}woof
│» ${prefix}gasm
│» ${prefix}solo
│» ${prefix}8ball
│» ${prefix}goose
│» ${prefix}avatar
│» ${prefix}hololewd
│» ${prefix}gecg
│» ${prefix}holo
│» ${prefix}fox_girl
│» ${prefix}tits
│» ${prefix}eroyuri
│» ${prefix}holoyero
│» ${prefix}lizard
│» ${prefix}keta
│» ${prefix}eron
│» ${prefix}erok
│» ${prefix}kemonomimi
│» ${prefix}cum_jpg
│» ${prefix}nsfw_avatar
│» ${prefix}erofeet
│» ${prefix}meow
│» ${prefix}wallpaper
│» ${prefix}waifu
│» ${prefix}trap
│» ${prefix}lewd
│» ${prefix}pussy_jpg
│» ${prefix}futanari
│» ${prefix}lewdk
│» ${prefix}solog
│» ${prefix}smug
│» ${prefix}cum
│» ${prefix}slap
│» ${prefix}les
│» ${prefix}erokemo
│» ${prefix}bj
│» ${prefix}pwankg
│» ${prefix}pat
│» ${prefix}poke
│» ${prefix}feed
│» ${prefix}nsfw_neko_gif
│» ${prefix}pussy
│» ${prefix}feetg
│» ${prefix}baka
│» ${prefix}hug
│» ${prefix}kiss
│» ${prefix}tickle
│» ${prefix}spank
│» ${prefix}kuni
│» ${prefix}classic
│» ${prefix}boobs
│» ${prefix}anal
│» ${prefix}ngif
│» ${prefix}cuddle
│» ${prefix}zettai
╰⌬

╭⌬〔 TEXTPRO 〕𝑅𝑖𝑝 𝐴𝑝𝑖.
│» ${prefix}halloween2 〈text¹|text²〉
│» ${prefix}horror 〈text¹|text²〉
│» ${prefix}game8bit 〈text¹|text²〉
│» ${prefix}layered 〈text¹|text²〉
│» ${prefix}glitch2 〈text¹|text²〉
│» ${prefix}coolg 〈text¹|text²〉
│» ${prefix}coolwg 〈text¹|text²〉
│» ${prefix}realistic 〈text¹|text²〉
│» ${prefix}space3d 〈text¹|text²〉
│» ${prefix}gtiktok 〈text¹|text²〉
│» ${prefix}stone 〈text¹|text²〉
│» ${prefix}marvel 〈text¹|text²〉
│» ${prefix}marvel2 〈text¹|text²〉
│» ${prefix}pornhub 〈text¹|text²〉
│» ${prefix}avengers 〈text¹|text²〉
│» ${prefix}metalr 〈text¹|text²〉
│» ${prefix}metalg 〈text¹|text²〉
│» ${prefix}metalg2 〈text¹|text²〉
│» ${prefix}halloween2 〈text¹|text²〉
│» ${prefix}lion 〈text¹|text²〉
│» ${prefix}wolf_bw 〈text¹|text²〉
│» ${prefix}wolf_g 〈text¹|text²〉
│» ${prefix}ninja 〈text¹|text²〉
│» ${prefix}3dsteel 〈text¹|text²〉
│» ${prefix}horror2 〈text¹|text²〉
│» ${prefix}lava 〈text¹|text²〉
│» ${prefix}bagel 〈text¹|text²〉
│» ${prefix}blackpink 〈text〉
│» ${prefix}rainbow2 〈text〉
│» ${prefix}water_pipe 〈text〉
│» ${prefix}halloween 〈text〉
│» ${prefix}sketch 〈text〉
│» ${prefix}sircuit 〈text〉
│» ${prefix}discovery 〈text〉
│» ${prefix}metallic2 〈text〉
│» ${prefix}fiction 〈text〉
│» ${prefix}demon 〈text〉
│» ${prefix}transformer 〈text〉
│» ${prefix}berry 〈text〉
│» ${prefix}thunder 〈text〉
│» ${prefix}magma 〈text〉
│» ${prefix}3dstone 〈text〉
│» ${prefix}neon 〈text〉
│» ${prefix}glitch 〈text〉
│» ${prefix}harry_potter 〈text〉
│» ${prefix}embossed 〈text〉
│» ${prefix}broken 〈text〉
│» ${prefix}papercut 〈text〉
│» ${prefix}gradient 〈text〉
│» ${prefix}glossy 〈text〉
│» ${prefix}watercolor 〈text〉
│» ${prefix}multicolor 〈text〉
│» ${prefix}neon_devil 〈text〉
│» ${prefix}underwater 〈text〉
│» ${prefix}bear 〈text〉
│» ${prefix}wonderfulg 〈text〉
│» ${prefix}christmas 〈text〉
│» ${prefix}neon_light 〈text〉
│» ${prefix}snow 〈text〉
│» ${prefix}cloudsky 〈text〉
│» ${prefix}luxury2 〈text〉
│» ${prefix}gradient2 〈text〉
│» ${prefix}summer 〈text〉
│» ${prefix}writing 〈text〉
│» ${prefix}engraved 〈text〉
│» ${prefix}summery 〈text〉
│» ${prefix}3dglue 〈text〉
│» ${prefix}metaldark 〈text〉
│» ${prefix}neonlight 〈text〉
│» ${prefix}oscar 〈text〉
│» ${prefix}minion 〈text〉
│» ${prefix}holographic 〈text〉
│» ${prefix}purple 〈text〉
│» ${prefix}glossyb 〈text〉
│» ${prefix}deluxe2 〈text〉
│» ${prefix}glossyc 〈text〉
│» ${prefix}fabric 〈text〉
│» ${prefix}neonc 〈text〉
│» ${prefix}newyear 〈text〉
│» ${prefix}newyear2 〈text〉
│» ${prefix}metals 〈text〉
│» ${prefix}xmas 〈text〉
│» ${prefix}blood 〈text〉
│» ${prefix}darkg 〈text〉
│» ${prefix}joker 〈text〉
│» ${prefix}wicker 〈text〉
│» ${prefix}natural 〈text〉
│» ${prefix}firework 〈text〉
│» ${prefix}skeleton 〈text〉
│» ${prefix}balloon 〈text〉
│» ${prefix}balloon2 〈text〉
│» ${prefix}balloon3 〈text〉
│» ${prefix}balloon4 〈text〉
│» ${prefix}balloon5 〈text〉
│» ${prefix}balloon6 〈text〉
│» ${prefix}balloon7 〈text〉
│» ${prefix}steel 〈text〉
│» ${prefix}gloss 〈text〉
│» ${prefix}denim 〈text〉
│» ${prefix}decorate 〈text〉
│» ${prefix}decorate2 〈text〉
│» ${prefix}peridot 〈text〉
│» ${prefix}rock 〈text〉
│» ${prefix}glass 〈text〉
│» ${prefix}glass2 〈text〉
│» ${prefix}glass3 〈text〉
│» ${prefix}glass4 〈text〉
│» ${prefix}glass5 〈text〉
│» ${prefix}glass6 〈text〉
│» ${prefix}glass7 〈text〉
│» ${prefix}glass8 〈text〉
│» ${prefix}captain_as2 〈text〉
│» ${prefix}robot 〈text〉
│» ${prefix}equalizer 〈text〉
│» ${prefix}toxic 〈text〉
│» ${prefix}sparkling 〈text〉
│» ${prefix}sparkling2 〈text〉
│» ${prefix}sparkling3 〈text〉
│» ${prefix}sparkling4 〈text〉
│» ${prefix}sparkling5 〈text〉
│» ${prefix}sparkling6 〈text〉
│» ${prefix}sparkling7 〈text〉
│» ${prefix}decorative 〈text〉
│» ${prefix}chocolate 〈text〉
│» ${prefix}strawberry 〈text〉
│» ${prefix}koifish 〈text〉
│» ${prefix}bread 〈text〉
│» ${prefix}matrix 〈text〉
│» ${prefix}blood2 〈text〉
│» ${prefix}neonligth2 〈text〉
│» ${prefix}thunder2 〈text〉
│» ${prefix}3dbox 〈text〉
│» ${prefix}neon2 〈text〉
│» ${prefix}roadw 〈text〉
│» ${prefix}bokeh 〈text〉
│» ${prefix}gneon 〈text〉
│» ${prefix}advanced 〈text〉
│» ${prefix}dropwater 〈text〉
│» ${prefix}wall 〈text〉
│» ${prefix}chrismast 〈text〉
│» ${prefix}honey 〈text〉
│» ${prefix}drug 〈text〉
│» ${prefix}marble 〈text〉
│» ${prefix}marble2 〈text〉
│» ${prefix}ice 〈text〉
│» ${prefix}juice 〈text〉
│» ${prefix}rusty 〈text〉
│» ${prefix}abstra 〈text〉
│» ${prefix}biscuit 〈text〉
│» ${prefix}wood 〈text〉
│» ${prefix}scifi 〈text〉
│» ${prefix}metalr 〈text〉
│» ${prefix}purpleg 〈text〉
│» ${prefix}shiny 〈text〉 
│» ${prefix}jewelry 〈text〉
│» ${prefix}jewelry2 〈text〉
│» ${prefix}jewelry3 〈text〉
│» ${prefix}jewelry4 〈text〉
│» ${prefix}jewelry5 〈text〉
│» ${prefix}jewelry6 〈text〉
│» ${prefix}jewelry7 〈text〉
│» ${prefix}jewelry8 〈text〉
│» ${prefix}metalh 〈text〉
│» ${prefix}golden 〈text〉
│» ${prefix}glitter 〈text〉
│» ${prefix}glitter2 〈text〉
│» ${prefix}glitter3 〈text〉
│» ${prefix}glitter4 〈text〉
│» ${prefix}glitter5 〈text〉
│» ${prefix}glitter6 〈text〉
│» ${prefix}glitter7 〈text〉
│» ${prefix}metale 〈text〉
│» ${prefix}carbon 〈text〉
│» ${prefix}candy 〈text〉
│» ${prefix}metalb 〈text〉
│» ${prefix}gemb 〈text〉
│» ${prefix}3dchrome 〈text〉
│» ${prefix}metalb2 〈text〉
│» ${prefix}metalg 〈text〉
│» ${prefix}metalg 〈text〉
╰⌬

╭⌬〔 OTHERS 〕
│» ${prefix}afk 〈reason〉
│» ${prefix}translate kode_bahasa 〈text〉
│» ${prefix}kalkulator 〈query〉
│» ${prefix}smeme 〈text〉
│» ${prefix}smeme2 〈text¹|text²〉
│» ${prefix}memegen 〈text¹|text²〉
│» ${prefix}halah
│» ${prefix}hilih
│» ${prefix}huluh
│» ${prefix}heleh
│» ${prefix}holoh
│» ${prefix}delttt
│» ${prefix}tictactoe
│» ${prefix}family100
│» ${prefix}tebak 〈option〉
│» ${prefix}math 〈mode〉
│» ${prefix}suitpvp 〈@tag〉
╰⌬

╭⌬〔 TQTO 〕
│» My God
│» My Parents
│» Fatih A.
│» Ferdi
│» DikaArdnt
│» Zeeone
│» Yoga
│» Riy
│» Faiz
│» Keyol
│» Penyedia Module
╰⌬
    `
}

exports.rules = (prefix) => {
    return `
〈 RULES AND FAQ 〉

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Riychbot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Riychbot
😖🙏


*〈 TRANSLATE 〉*

1. Don't spambots. .
Sanctions: *❎ WARNING/SOFT BLOCK*

2. Don't call bots. ️
Sanctions: *❎ SOFT BLOCK*

3. Don't exploit bots.😖
Sanctions: *PERMANENT BLOCK*

️Bot not or slow to respond ?
️May be affected by network, signal, banned by Whatsapp and some random. Keep obeying the rules️

Where can I get the script from this bot?
️This manuscript is still private and has never been traded, be wise in knowing fraudsters.

️Can I add to the group?
️The bot is temporarily in free to add status.

️What's the beginning?
️This bot uses multi prefix. That means you can use the # prefix, . , and other reasonable prefixes.

️Sis, why is the chat owner not responding?
️The owner only responds to questions about bots and error problems, not for acquaintances or begging for scripts.


If you have reached the rules, please type *${prefix}allmenu* to get started!

️All Riychbot policies and conditions are held by the owner and the policy, at any time the owner has the right to make decisions, prevents users (*﹏*)

Thank You! For those of you who are user friendly and some of the people who helped also in the Riychbot project
🙏
`
}
exports.welcome = () =>{
	return`
𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 su
	
• 𝖭𝖺𝗆𝖺 :
• 𝖴𝗆𝗎𝗋 :
• 𝖦𝖾𝗇𝖽𝖾𝗋 :
• 𝖠𝗌𝗄𝗈𝗍 :
• 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Sikontol out, bye beban group`
}
exports.source = () =>{
return`
Nyari Apa Banh 🤔
`
}
exports.tos = (ownernomer) => {
    return `
〈 DONATE 〉

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭⌬〔 BOT INFO 〕
│» ${prefix}owner
│» ${prefix}rules
│» ${prefix}ping
│» ${prefix}runtime
│» ${prefix}botstatus
│» ${prefix}donate
│» ${prefix}partner
╰⌬
`}

exports.ownermenu = (prefix) =>{
return`╭⌬〔 OWNER 〕
│» < evaluate
│» > evaluate
│» $ exec
│» => exec
│» ${prefix}setmenu 〈query〉
│» ${prefix}setmenu templateLocation
│» ${prefix}setmenu templateTenor
│» ${prefix}sendsesi
│» ${prefix}listpc
│» ${prefix}listgc
│» ${prefix}broadcast 〈text〉
│» ${prefix}bc 〈text〉
│» ${prefix}bcgc 〈text〉
│» ${prefix}nsfw 〈on/off〉
│» ${prefix}antiviewonce 〈on/off〉
│» ${prefix}join 〈link〉
│» ${prefix}self
│» ${prefix}public 〈only bot〉
│» ${prefix}del 〈reply pesan bot〉
│» ${prefix}setppbot 〈reply foto〉
╰⌬
`}

exports.database = (prefix) =>{
	return`╭⌬〔 DATABASE 〕
│» ${prefix}setcmd 〈reply stiker〉
│» ${prefix}delcmd 〈reply stiker〉
│» ${prefix}listcmd
│» ${prefix}absen
│» ${prefix}cekabsen
│» ${prefix}deleteabsen
│» ${prefix}absenstart
│» ${prefix}addmsg 〈nama file〉
│» ${prefix}getmsg 〈nama file〉
│» ${prefix}listmsg
│» ${prefix}delmsg 〈nama file〉
╰⌬
`}

exports.group = (prefix) =>{
	return`╭⌬〔 GROUP 〕
│» ${prefix}antilink 〈on/off〉
│» ${prefix}setppgrup 〈reply foto〉
│» ${prefix}group 〈open/close〉
│» ${prefix}setdesk 〈text〉
│» ${prefix}add 〈62***〉
│» ${prefix}kick @tag
│» ${prefix}promote 〈@tag/reply〉
│» ${prefix}demote 〈@tag/reply〉
│» ${prefix}linkgc
│» ${prefix}revoke
│» ${prefix}infochat
│» ${prefix}leave
│» ${prefix}listonline
│» ${prefix}sider
│» ${prefix}tagall 〈text〉
│» ${prefix}hidetag 〈text〉
╰⌬
`}

exports.anime = (prefix) =>{
	return`╭⌬〔 ANIME 〕
│» ${prefix}quotesanime
│» ${prefix}anime 〈query〉
│» ${prefix}manga 〈query〉
│» ${prefix}character 〈query〉
╰⌬
`}

exports.tag = (prefix) =>{
	return`╭⌬〔 TAG 〕
│» ${prefix}stickertag
│» ${prefix}videotag 〈query〉
│» ${prefix}vntag 〈query〉
│» ${prefix}imagetag 〈query〉
╰⌬
`}

exports.stalk = (prefix) =>{
	return`╭⌬〔 STALKING 〕
│» ${prefix}igstalk 〈username〉
│» ${prefix}ghstalk 〈username〉
│» ${prefix}ytstalk 〈channel〉
╰⌬
`}

exports.search = (prefix) =>{
	return`╭⌬〔 SEARCH 〕
│» ${prefix}ytsearch 〈query〉
│» ${prefix}wallpaper 〈query〉
│» ${prefix}wikimedia 〈query〉
│» ${prefix}hentai
│» ${prefix}wattpad 〈query〉
│» ${prefix}webtoons 〈query〉
│» ${prefix}drakor 〈query〉
│» ${prefix}pinterest 〈query〉
╰⌬
`}

exports.converter = (prefix) =>{
	return`╭⌬〔 CONVERTER 〕
│» ${prefix}stiker 〈reply foto〉
│» ${prefix}tourl 〈reply foto/video〉
│» ${prefix}togif 〈reply sticker〉
│» ${prefix}tomp4 〈reply sticker〉
│» ${prefix}toimg 〈reply sticker〉
│» ${prefix}removebg 〈reply foto〉
│» ${prefix}emojimix 〈🤔+😱〉
╰⌬
`}

exports.effect = (prefix) =>{
	return`╭⌬〔 IMAGE EFFECT 〕
│» ${prefix}wanted 〈reply foto/stiker〉
│» ${prefix}utatoo 〈reply foto/stiker〉
│» ${prefix}unsharpen 〈reply foto/stiker〉
│» ${prefix}thanos 〈reply foto/stiker〉
│» ${prefix}sniper 〈reply foto/stiker〉
│» ${prefix}sharpen 〈reply foto/stiker〉
│» ${prefix}sepia 〈reply foto/stiker〉
│» ${prefix}scary 〈reply foto/stiker〉
│» ${prefix}rip 〈reply foto/stiker〉
│» ${prefix}redple 〈reply foto/stiker〉
│» ${prefix}rejected 〈reply foto/stiker〉
│» ${prefix}posterize 〈reply foto/stiker〉
│» ${prefix}ps4 〈reply foto/stiker〉
│» ${prefix}pixelize 〈reply foto/stiker〉
│» ${prefix}missionpassed 〈reply foto/stiker〉
│» ${prefix}moustache 〈reply foto/stiker〉
│» ${prefix}lookwhatkarenhave 〈reply foto/stiker〉
│» ${prefix}jail 〈reply foto/stiker〉
│» ${prefix}invert 〈reply foto/stiker〉
│» ${prefix}instagram 〈reply foto/stiker〉
│» ${prefix}greyscale 〈reply foto/stiker〉
│» ${prefix}glitch 〈reply foto/stiker〉
│» ${prefix}gay 〈reply foto/stiker〉
│» ${prefix}frame 〈reply foto/stiker〉
│» ${prefix}fire 〈reply foto/stiker〉
│» ${prefix}distort 〈reply foto/stiker〉
│» ${prefix}dictator 〈reply foto/stiker〉
│» ${prefix}deepfry 〈reply foto/stiker〉
│» ${prefix}ddungeon 〈reply foto/stiker〉
│» ${prefix}circle 〈reply foto/stiker〉
│» ${prefix}challenger 〈reply foto/stiker〉
│» ${prefix}burn 〈reply foto/stiker〉
│» ${prefix}brazzers 〈reply foto/stiker〉
│» ${prefix}beautiful 〈reply foto/stiker〉
╰⌬
`}

//
exports.effect2 = (prefix) =>{
	return`╭⌬〔 STICKER EFFECT 〕
│» ${prefix}jail 〈reply foto/stiker〉
│» ${prefix}red 〈reply foto/stiker〉
│» ${prefix}gay 〈reply foto/stiker〉
│» ${prefix}bloo 〈reply foto/stiker〉
│» ${prefix}blue 〈reply foto/stiker〉
│» ${prefix}sepia 〈reply foto/stiker〉
│» ${prefix}green 〈reply foto/stiker〉
│» ${prefix}glass 〈reply foto/stiker〉
│» ${prefix}invert 〈reply foto/stiker〉
│» ${prefix}blurple 〈reply foto/stiker〉
│» ${prefix}blurple2 〈reply foto/stiker〉
│» ${prefix}wasted 〈reply foto/stiker〉
│» ${prefix}passed 〈reply foto/stiker〉
│» ${prefix}triggered 〈reply foto/stiker〉
│» ${prefix}comrade 〈reply foto/stiker〉
│» ${prefix}greyscale 〈reply foto/stiker〉
│» ${prefix}threshold 〈reply foto/stiker〉
│» ${prefix}brightness 〈reply foto/stiker〉
│» ${prefix}invertgreyscale 〈reply foto/stiker〉
╰⌬
`
}

exports.download = (prefix) =>{
return`╭⌬〔 DOWNLOAD 〕
│» ${prefix}tiktok 〈link〉
│» ${prefix}tiktoknowm 〈link〉
│» ${prefix}tiktokwm 〈link〉
│» ${prefix}tiktokaudio 〈link〉
│» ${prefix}ytdl 〈link〉
│» ${prefix}play 〈query〉
│» ${prefix}ytmp3 〈link〉
│» ${prefix}ytshortmp3 〈link〉
│» ${prefix}ytmp4 〈link〉
│» ${prefix}ytshorts 〈link〉
│» ${prefix}facebook 〈link〉
│» ${prefix}facebooksd 〈link〉
│» ${prefix}facebookhd 〈link〉
│» ${prefix}fbaudio 〈link〉
│» ${prefix}igstory 〈username〉
│» ${prefix}igdl 〈link〉
│» ${prefix}igphoto 〈link〉
│» ${prefix}igvideo 〈link〉
│» ${prefix}igreels 〈link〉
│» ${prefix}igtv 〈link〉
│» ${prefix}soundcloud 〈link〉
│» ${prefix}gitclone 〈link repo〉
│» ${prefix}mediafire 〈link〉
│» ${prefix}twitter 〈link〉
╰⌬
`
}

exports.ranime = (prefix) =>{
	return`╭⌬〔 RANDOM ANIME 〕
│» ${prefix}loli
│» ${prefix}neko
│» ${prefix}waifu
│» ${prefix}shinobu
│» ${prefix}megumin
│» ${prefix}bully
│» ${prefix}cuddle
│» ${prefix}cry
│» ${prefix}hug
│» ${prefix}awoo
│» ${prefix}kiss
│» ${prefix}lick
│» ${prefix}pat
│» ${prefix}smug
│» ${prefix}bonk
│» ${prefix}yeet
│» ${prefix}blush
│» ${prefix}smile
│» ${prefix}wave
│» ${prefix}highfive
│» ${prefix}handhold
│» ${prefix}nom
│» ${prefix}bite
│» ${prefix}glomp
│» ${prefix}slap
│» ${prefix}kill
│» ${prefix}happy
│» ${prefix}wink
│» ${prefix}poke
│» ${prefix}dance
│» ${prefix}cringe
╰⌬
`
}

exports.nsfw = (prefix) =>{
	return`╭⌬〔 NSFW & SFW 〕
│» ${prefix}ahegao
│» ${prefix}ass
│» ${prefix}bdsm
│» ${prefix}blowjob
│» ${prefix}cuckold
│» ${prefix}cum
│» ${prefix}ero
│» ${prefix}femdom
│» ${prefix}foot
│» ${prefix}gangbang
│» ${prefix}glasses
│» ${prefix}jahy
│» ${prefix}manga
│» ${prefix}masturbation
│» ${prefix}neko
│» ${prefix}orgy
│» ${prefix}panties
│» ${prefix}pussy
│» ${prefix}tentacles
│» ${prefix}thighs
│» ${prefix}yuri
│» ${prefix}feet
│» ${prefix}lewdkemo
│» ${prefix}woof
│» ${prefix}gasm
│» ${prefix}solo
│» ${prefix}8ball
│» ${prefix}goose
│» ${prefix}avatar
│» ${prefix}hololewd
│» ${prefix}gecg
│» ${prefix}holo
│» ${prefix}fox_girl
│» ${prefix}tits
│» ${prefix}eroyuri
│» ${prefix}holoyero
│» ${prefix}lizard
│» ${prefix}keta
│» ${prefix}eron
│» ${prefix}erok
│» ${prefix}kemonomimi
│» ${prefix}cum_jpg
│» ${prefix}nsfw_avatar
│» ${prefix}erofeet
│» ${prefix}meow
│» ${prefix}wallpaper
│» ${prefix}waifu
│» ${prefix}trap
│» ${prefix}lewd
│» ${prefix}pussy_jpg
│» ${prefix}futanari
│» ${prefix}lewdk
│» ${prefix}solog
│» ${prefix}smug
│» ${prefix}cum
│» ${prefix}slap
│» ${prefix}les
│» ${prefix}erokemo
│» ${prefix}bj
│» ${prefix}pwankg
│» ${prefix}pat
│» ${prefix}poke
│» ${prefix}feed
│» ${prefix}nsfw_neko_gif
│» ${prefix}pussy
│» ${prefix}feetg
│» ${prefix}baka
│» ${prefix}hug
│» ${prefix}kiss
│» ${prefix}tickle
│» ${prefix}spank
│» ${prefix}kuni
│» ${prefix}classic
│» ${prefix}boobs
│» ${prefix}anal
│» ${prefix}ngif
│» ${prefix}cuddle
│» ${prefix}zettai
╰⌬
`
}

exports.textpro = (prefix) =>{
	return`╭⌬〔 TEXTPRO 〕
│» ${prefix}halloween2 〈text¹|text²〉
│» ${prefix}horror 〈text¹|text²〉
│» ${prefix}game8bit 〈text¹|text²〉
│» ${prefix}layered 〈text¹|text²〉
│» ${prefix}glitch2 〈text¹|text²〉
│» ${prefix}coolg 〈text¹|text²〉
│» ${prefix}coolwg 〈text¹|text²〉
│» ${prefix}realistic 〈text¹|text²〉
│» ${prefix}space3d 〈text¹|text²〉
│» ${prefix}gtiktok 〈text¹|text²〉
│» ${prefix}stone 〈text¹|text²〉
│» ${prefix}marvel 〈text¹|text²〉
│» ${prefix}marvel2 〈text¹|text²〉
│» ${prefix}pornhub 〈text¹|text²〉
│» ${prefix}avengers 〈text¹|text²〉
│» ${prefix}metalr 〈text¹|text²〉
│» ${prefix}metalg 〈text¹|text²〉
│» ${prefix}metalg2 〈text¹|text²〉
│» ${prefix}halloween2 〈text¹|text²〉
│» ${prefix}lion 〈text¹|text²〉
│» ${prefix}wolf_bw 〈text¹|text²〉
│» ${prefix}wolf_g 〈text¹|text²〉
│» ${prefix}ninja 〈text¹|text²〉
│» ${prefix}3dsteel 〈text¹|text²〉
│» ${prefix}horror2 〈text¹|text²〉
│» ${prefix}lava 〈text¹|text²〉
│» ${prefix}bagel 〈text¹|text²〉
│» ${prefix}blackpink 〈text〉
│» ${prefix}rainbow2 〈text〉
│» ${prefix}water_pipe 〈text〉
│» ${prefix}halloween 〈text〉
│» ${prefix}sketch 〈text〉
│» ${prefix}sircuit 〈text〉
│» ${prefix}discovery 〈text〉
│» ${prefix}metallic2 〈text〉
│» ${prefix}fiction 〈text〉
│» ${prefix}demon 〈text〉
│» ${prefix}transformer 〈text〉
│» ${prefix}berry 〈text〉
│» ${prefix}thunder 〈text〉
│» ${prefix}magma 〈text〉
│» ${prefix}3dstone 〈text〉
│» ${prefix}neon 〈text〉
│» ${prefix}glitch 〈text〉
│» ${prefix}harry_potter 〈text〉
│» ${prefix}embossed 〈text〉
│» ${prefix}broken 〈text〉
│» ${prefix}papercut 〈text〉
│» ${prefix}gradient 〈text〉
│» ${prefix}glossy 〈text〉
│» ${prefix}watercolor 〈text〉
│» ${prefix}multicolor 〈text〉
│» ${prefix}neon_devil 〈text〉
│» ${prefix}underwater 〈text〉
│» ${prefix}bear 〈text〉
│» ${prefix}wonderfulg 〈text〉
│» ${prefix}christmas 〈text〉
│» ${prefix}neon_light 〈text〉
│» ${prefix}snow 〈text〉
│» ${prefix}cloudsky 〈text〉
│» ${prefix}luxury2 〈text〉
│» ${prefix}gradient2 〈text〉
│» ${prefix}summer 〈text〉
│» ${prefix}writing 〈text〉
│» ${prefix}engraved 〈text〉
│» ${prefix}summery 〈text〉
│» ${prefix}3dglue 〈text〉
│» ${prefix}metaldark 〈text〉
│» ${prefix}neonlight 〈text〉
│» ${prefix}oscar 〈text〉
│» ${prefix}minion 〈text〉
│» ${prefix}holographic 〈text〉
│» ${prefix}purple 〈text〉
│» ${prefix}glossyb 〈text〉
│» ${prefix}deluxe2 〈text〉
│» ${prefix}glossyc 〈text〉
│» ${prefix}fabric 〈text〉
│» ${prefix}neonc 〈text〉
│» ${prefix}newyear 〈text〉
│» ${prefix}newyear2 〈text〉
│» ${prefix}metals 〈text〉
│» ${prefix}xmas 〈text〉
│» ${prefix}blood 〈text〉
│» ${prefix}darkg 〈text〉
│» ${prefix}joker 〈text〉
│» ${prefix}wicker 〈text〉
│» ${prefix}natural 〈text〉
│» ${prefix}firework 〈text〉
│» ${prefix}skeleton 〈text〉
│» ${prefix}balloon 〈text〉
│» ${prefix}balloon2 〈text〉
│» ${prefix}balloon3 〈text〉
│» ${prefix}balloon4 〈text〉
│» ${prefix}balloon5 〈text〉
│» ${prefix}balloon6 〈text〉
│» ${prefix}balloon7 〈text〉
│» ${prefix}steel 〈text〉
│» ${prefix}gloss 〈text〉
│» ${prefix}denim 〈text〉
│» ${prefix}decorate 〈text〉
│» ${prefix}decorate2 〈text〉
│» ${prefix}peridot 〈text〉
│» ${prefix}rock 〈text〉
│» ${prefix}glass 〈text〉
│» ${prefix}glass2 〈text〉
│» ${prefix}glass3 〈text〉
│» ${prefix}glass4 〈text〉
│» ${prefix}glass5 〈text〉
│» ${prefix}glass6 〈text〉
│» ${prefix}glass7 〈text〉
│» ${prefix}glass8 〈text〉
│» ${prefix}captain_as2 〈text〉
│» ${prefix}robot 〈text〉
│» ${prefix}equalizer 〈text〉
│» ${prefix}toxic 〈text〉
│» ${prefix}sparkling 〈text〉
│» ${prefix}sparkling2 〈text〉
│» ${prefix}sparkling3 〈text〉
│» ${prefix}sparkling4 〈text〉
│» ${prefix}sparkling5 〈text〉
│» ${prefix}sparkling6 〈text〉
│» ${prefix}sparkling7 〈text〉
│» ${prefix}decorative 〈text〉
│» ${prefix}chocolate 〈text〉
│» ${prefix}strawberry 〈text〉
│» ${prefix}koifish 〈text〉
│» ${prefix}bread 〈text〉
│» ${prefix}matrix 〈text〉
│» ${prefix}blood2 〈text〉
│» ${prefix}neonligth2 〈text〉
│» ${prefix}thunder2 〈text〉
│» ${prefix}3dbox 〈text〉
│» ${prefix}neon2 〈text〉
│» ${prefix}roadw 〈text〉
│» ${prefix}bokeh 〈text〉
│» ${prefix}gneon 〈text〉
│» ${prefix}advanced 〈text〉
│» ${prefix}dropwater 〈text〉
│» ${prefix}wall 〈text〉
│» ${prefix}chrismast 〈text〉
│» ${prefix}honey 〈text〉
│» ${prefix}drug 〈text〉
│» ${prefix}marble 〈text〉
│» ${prefix}marble2 〈text〉
│» ${prefix}ice 〈text〉
│» ${prefix}juice 〈text〉
│» ${prefix}rusty 〈text〉
│» ${prefix}abstra 〈text〉
│» ${prefix}biscuit 〈text〉
│» ${prefix}wood 〈text〉
│» ${prefix}scifi 〈text〉
│» ${prefix}metalr 〈text〉
│» ${prefix}purpleg 〈text〉
│» ${prefix}shiny 〈text〉 
│» ${prefix}jewelry 〈text〉
│» ${prefix}jewelry2 〈text〉
│» ${prefix}jewelry3 〈text〉
│» ${prefix}jewelry4 〈text〉
│» ${prefix}jewelry5 〈text〉
│» ${prefix}jewelry6 〈text〉
│» ${prefix}jewelry7 〈text〉
│» ${prefix}jewelry8 〈text〉
│» ${prefix}metalh 〈text〉
│» ${prefix}golden 〈text〉
│» ${prefix}glitter 〈text〉
│» ${prefix}glitter2 〈text〉
│» ${prefix}glitter3 〈text〉
│» ${prefix}glitter4 〈text〉
│» ${prefix}glitter5 〈text〉
│» ${prefix}glitter6 〈text〉
│» ${prefix}glitter7 〈text〉
│» ${prefix}metale 〈text〉
│» ${prefix}carbon 〈text〉
│» ${prefix}candy 〈text〉
│» ${prefix}metalb 〈text〉
│» ${prefix}gemb 〈text〉
│» ${prefix}3dchrome 〈text〉
│» ${prefix}metalb2 〈text〉
│» ${prefix}metalg 〈text〉
│» ${prefix}metalg 〈text〉
╰⌬
`
}


exports.other = (prefix) =>{
return`╭⌬〔 OTHERS 〕
│» ${prefix}afk 〈reason〉
│» ${prefix}translate kode_bahasa 〈text〉
│» ${prefix}kalkulator 〈query〉
│» ${prefix}smeme 〈text〉
│» ${prefix}smeme2 〈text¹|text²〉
│» ${prefix}memegen 〈text¹|text²〉
│» ${prefix}halah
│» ${prefix}hilih
│» ${prefix}huluh
│» ${prefix}heleh
│» ${prefix}holoh
│» ${prefix}tictactoe
│» ${prefix}delttt
│» ${prefix}family100
│» ${prefix}tebak 〈option〉
│» ${prefix}math 〈mode〉
│» ${prefix}suitpvp 〈@tag〉
╰⌬
`
}

exports.tqto = () =>{
	return`╭⌬〔 TQTO 〕
│» My God
│» My Parents
│» Fatih A.
│» Ferdi
│» DikaArdnt
│» Zeeone
│» Yoga
│» Riy
│» Faiz
│» Keyol
│» Penyedia Module
╰⌬
`
}
