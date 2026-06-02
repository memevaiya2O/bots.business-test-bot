/*CMD
  command: add_channel
  help: 
  need_reply: true
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
if (!params) { Bot.sendMessage("➕ *Sᴇɴᴅ ᴛʜᴇ ᴄʜᴀɴɴᴇʟ ᴜsᴇʀɴᴀᴍᴇ ᴛᴏ ᴀᴅᴅ:*\n_Exᴀᴍᴘʟᴇ: @mychannel_", {parse_mode: "Markdown"}); return; }
var val = message.trim();
if (!val.startsWith("@")) val = "@" + val;
var channels = Bot.getProperty("force_channels", []);
if (channels.indexOf(val) >= 0) { Bot.sendMessage("⚠️ Cʜᴀɴɴᴇʟ ᴀʟʀᴇᴀᴅʏ ɪɴ ʟɪsᴛ: " + val); return; }
channels.push(val);
Bot.setProperty("force_channels", channels, "json");
var b = [[{title: "🔙 Fᴏʀᴄᴇ Jᴏɪɴ Mᴀɴᴀɢᴇʀ", command: "force_join_panel"}]];
Bot.sendInlineKeyboard(b, "✅ *Cʜᴀɴɴᴇʟ Aᴅᴅᴇᴅ: *" + val + "*\n📢 Tᴏᴛᴀʟ: *" + channels.length + "*", {parse_mode: "Markdown"});
