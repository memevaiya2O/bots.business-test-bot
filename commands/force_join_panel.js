/*CMD
  command: force_join_panel
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

 if (user.telegramid != Bot.getProperty("admin_id")) { return; }
  var channels = Bot.getProperty("force_channels", []);
  var text = "📢 *Fᴏʀᴄᴇ Jᴏɪɴ Mᴀɴᴀɢᴇʀ*\n\n";
  if (channels.length == 0) { text += "Nᴏ ᴄʜᴀɴɴᴇʟ ᴀᴅᴅᴇᴅ."; }
  else { for (var i = 0; i < channels.length; i++) { text += (i + 1) + ". " + channels[i] + "\n"; } }
  Bot.sendKeyboard("➕ Aᴅᴅ Cʜᴀɴɴᴇʟ, ➖ Rᴇᴍᴏᴠᴇ Cʜᴀɴɴᴇʟ\n👑 Aᴅᴍɪɴ Pᴀɴᴇʟ", text);

