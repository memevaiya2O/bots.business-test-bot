/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid != Bot.getProperty("admin_id")) { Bot.sendMessage("❌ Aᴄᴄᴇss Dᴇɴɪᴇᴅ"); return; }
  Bot.runCommand("admin_panel");

