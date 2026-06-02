/*CMD
  command: customize_ui
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
  Bot.sendKeyboard("🏷️ Sᴇᴛ Bʀᴀɴᴅ Nᴀᴍᴇ, 🏡 Sᴇᴛ Wᴇʟᴄᴏᴍᴇ Tɪᴛʟᴇ\n📝 Sᴇᴛ Sᴜʙᴛɪᴛʟᴇ, 🎁 Sᴇᴛ Rᴇᴡᴀʀᴅ Tᴇxᴛ\n👑 Aᴅᴍɪɴ Pᴀɴᴇʟ", "🎨 *Cᴜsᴛᴏᴍɪᴢᴇ UI*\n\n🏷️ Bʀᴀɴᴅ: *" + Bot.getProperty("bot_brand", "Premium Script Bot") + "*\n🏡 Tɪᴛʟᴇ: *" + Bot.getProperty("welcome_title", "Welcome") + "*\n📝 Sᴜʙᴛɪᴛʟᴇ: *" + Bot.getProperty("welcome_subtitle", "Premium Bot") + "*\n🎁 Rᴇᴡᴀʀᴅ: *" + Bot.getProperty("reward_text", "Premium Reward") + "*");


