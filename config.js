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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_28_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICA2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjk0ckQ2VWJuZWFBa3V6N2JwL2ZURGNYdHNVc1gxaEFaMGRwdVBjSmhFd2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MDgyMjc4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEE3Q0ZGODQ0Njg0RTg2MzQ5RTFDRTZCQUFENTExMjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0NDcyODk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMTZWNzREY0xScGFEWFZubG9nNFNhUVwiLFxuICBcInBob25lSWRcIjogXCIxNTg5ODVkMC1lYTIzLTQyNDMtODYwMi1jNjBkMzhkNWQ4ZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMTIxLFxuICAgICAgMTY4LFxuICAgICAgOTgsXG4gICAgICA4MSxcbiAgICAgIDE3OSxcbiAgICAgIDExNCxcbiAgICAgIDc2LFxuICAgICAgNzEsXG4gICAgICAyMzAsXG4gICAgICAxMDYsXG4gICAgICAxNDUsXG4gICAgICA0NyxcbiAgICAgIDE0OCxcbiAgICAgIDI0NCxcbiAgICAgIDQsXG4gICAgICAyMDgsXG4gICAgICAxMDAsXG4gICAgICA0OSxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxNSxcbiAgICAgIDE1MyxcbiAgICAgIDE2OSxcbiAgICAgIDEyNCxcbiAgICAgIDE3NSxcbiAgICAgIDE1OCxcbiAgICAgIDc4LFxuICAgICAgMjM0LFxuICAgICAgMjE1LFxuICAgICAgMzYsXG4gICAgICAxMCxcbiAgICAgIDEwMCxcbiAgICAgIDU5LFxuICAgICAgNzQsXG4gICAgICAxNzYsXG4gICAgICAxODMsXG4gICAgICAxNyxcbiAgICAgIDIyOCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE4UjcySERaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQwODIyNzg3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg1MDI3OTIwNTk3MTIxOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSmFjZWJyaWdodFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BycTFJRUJFTGVQdzdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSDYwTCtZeXl6NGNqSEpKZXp2SHNOakdQdENobG41NThvb2RJckdockFVTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIycmJDWnNnRXEwS2VjRkJNQmZ6RTJTdEVHc3FxV0MwNTNUVUR1N3ljSHNCRVNJS3FTb21oMDlKaks1OWpwS2oyLy9KWVpzdUVOdVo3ZldFUFQ2WXJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHOG5jcjREU0dEQ0dQZnhxOWc1TmdZdTJkS0hlRkdBWFNoWnp6V2ZlRDd1RkJvR0pCek1YTDFFdms4ZjVEdjQ5NTluMHlzSVBHeGtxMXp0azV6NHdCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQwODIyNzg3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ0NzI4OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGb1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZvWC5qc29uIjogIntcImtleURhdGFcIjpcIkhVTFQ3WXJvdXFTVVBZa0pDam1aK2RvYlVPdWdVTy91MFFQdzMrd0d3WTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcxOTIyNTUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Jacebright",
  packname: process.env.PACK_NAME || "Jacebright",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
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
