const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "πΎππ¦πππππ‘-ππ"
global.ownername= "πΎππ¦ππ πΎππππ"
global.myweb ="https://api-jembot.herokuapp.com/"
global.youtube = "https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw"
global.github = "https://github.com/riychuhuy"
global.ownernomer = "6281575886399"
global.ownernomerr = "+6281575886399"
global.thumbnail = "./image/riych.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6281575886399","6281575886399","6281575886399"] //ganti agar fitur owner bisa di gunakan
global.packname = 'Β© πΎππ¦πππππ‘-ππ' //sticker wm
global.author = 'πΎππ¦ππ πΎππππ' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
    sukses: 'β©βΊοΈβͺ Oke, Done Kak',
    admin: 'β©ββͺ Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'β©ββͺ Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'β©ββͺ Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'β©ββͺ Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'β©ββͺ Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'β©ββͺ Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'β©ββͺ Maaf Saat Ini Belum Support Sticker Gif !',
    wait: 'β©β³βͺ Sedang Di Proses',
	lockCmd: 'β©ββͺ Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
