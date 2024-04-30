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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_44_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1BSVDYydnRsSjBTUmY1VUNvdzZVd0oxWlRaK0pkTDZDMWJpSDVsWHJnRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibjgxZHkybkhURXFkbUxfWGxtT0FjQVwiLFxuICBcInBob25lSWRcIjogXCJlODljMDNhOC0wNThkLTRlZTYtYTdlMS01MTQ2MGNiMDg5ZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTQwLFxuICAgICAgNzQsXG4gICAgICAxOTIsXG4gICAgICAxNzgsXG4gICAgICAyMjgsXG4gICAgICAxMzYsXG4gICAgICA3OSxcbiAgICAgIDIwOSxcbiAgICAgIDUzLFxuICAgICAgMjI0LFxuICAgICAgNDQsXG4gICAgICA0MixcbiAgICAgIDE4OCxcbiAgICAgIDkzLFxuICAgICAgNzUsXG4gICAgICAxOTAsXG4gICAgICAyMDgsXG4gICAgICAyMjcsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyMDEsXG4gICAgICAyMDIsXG4gICAgICAxNixcbiAgICAgIDEzMSxcbiAgICAgIDc0LFxuICAgICAgNTcsXG4gICAgICAyNixcbiAgICAgIDI0MCxcbiAgICAgIDIyNCxcbiAgICAgIDk4LFxuICAgICAgNDcsXG4gICAgICA1OSxcbiAgICAgIDczLFxuICAgICAgOTksXG4gICAgICAxMjcsXG4gICAgICAyMTMsXG4gICAgICAyMjAsXG4gICAgICAxMzEsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjMyUDI0UUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA4MjI3ODc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODUwMjc5MjA1OTcxMjE6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKYWNlYnJpZ2h0XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpxMUlFQkVMcWp4TEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJINjBMK1l5eXo0Y2pISkplenZIc05qR1B0Q2hsbjU1OG9vZElyR2hyQVVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5MekhVVnpsZ1ppMHU1Z25HK01OSVdBRWh1QmVEdjFKSjdNQ1ZUNUFURkxBUW9ydDFuN3lHdlVKd1ZnNjQzUUNBMExGVzNXSTROaEw4V291VEhUWkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImV2cGNlSzhJZXlBRXMybXVZaFc4Q2E1bitNUUJRZWhWRmc4ZDcreWNwNHBGLzROVTdEdkpwZko2ZXpaUWZrUHJtb1NHYjZmZ0N3SG1PWVFyZk96cGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDA4MjI3ODc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDQ5MTgzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZvWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm9ZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY05EMk83TG5IaUxjSXltUzRpcWVpRTFTdDBBWTZWNnZCYlBvc0hMdExoYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzE5MjI1NTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
