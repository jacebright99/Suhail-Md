const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040822787";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidTBobThiYnh2bzZDajdmUFpvenc2NCtscWwrQ0YydlE3NmR2MzZBRXZWND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidUVYZnh5bU9TWGFEZXUtZ1BDbXZxZ1wiLFxuICBcInBob25lSWRcIjogXCJkNWQ4YzFjMi0yNGJiLTQzYmMtOTcwNy1jMjdjNjczMDEwMmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgODQsXG4gICAgICA0OCxcbiAgICAgIDE3OSxcbiAgICAgIDExMyxcbiAgICAgIDE2MSxcbiAgICAgIDE4OCxcbiAgICAgIDIxMCxcbiAgICAgIDgwLFxuICAgICAgMTY5LFxuICAgICAgMTYwLFxuICAgICAgMjEzLFxuICAgICAgMjIwLFxuICAgICAgMjA4LFxuICAgICAgMCxcbiAgICAgIDExMCxcbiAgICAgIDIwMSxcbiAgICAgIDIxNixcbiAgICAgIDcyLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjcsXG4gICAgICAyMDMsXG4gICAgICAxMTcsXG4gICAgICA2MyxcbiAgICAgIDIxOSxcbiAgICAgIDQwLFxuICAgICAgMTQxLFxuICAgICAgMTksXG4gICAgICAyNDIsXG4gICAgICAyMixcbiAgICAgIDEzNSxcbiAgICAgIDYzLFxuICAgICAgMjQ5LFxuICAgICAgMjA4LFxuICAgICAgMjAzLFxuICAgICAgMTc3LFxuICAgICAgMjMyLFxuICAgICAgMTQyLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRYUlhaNUUzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQwODIyNzg3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NTAyNzkyMDU5NzEyMToxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKYWNlYnJpZ2h0XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDNxMUlFQkVNZTJ4TEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJINjBMK1l5eXo0Y2pISkplenZIc05qR1B0Q2hsbjU1OG9vZElyR2hyQVVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxsL290TXVETWEzakxrU1dPVVlQYlRzZnRRNG12UDBEeCtsWFVLeEkzTHFweXlCR1NJV3FmWlBJRTdzUWFzOGxnVnlHejZTRFJUZUxCaHVkNllyRUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRQUVJVN3B3VHFxZEpyS3pRSDNKTFJLeHpkWlFNRkpSdU5LSkJXNTVabU5HaS83N2dKQ3puK3J3SWphRWM4VzJCVm9tYjNlL1U2aEphMXNYTlJra0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDA4MjI3ODc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ0OTQyODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGb1lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZvWS5qc29uIjogIntcImtleURhdGFcIjpcImNORDJPN0xuSGlMY0l5bVM0aXFlaUUxU3QwQVk2VjZ2QmJQb3NITHRMaGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcxOTIyNTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Jacebright",
  packname: process.env.PACK_NAME || "Jacebright",
  botname : process.env.BOT_NAME  || "Jace",
  ownername:process.env.OWNER_NAME|| "Jacebright",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
