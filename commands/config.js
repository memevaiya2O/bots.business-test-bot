/*CMD
  command: config
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

var admin_id = 8373846582;
var agent_id = 8373846582;
var agent_username = "@agent_username";
var support_username = "@support_username";
var withdraw_channel = "@withdraw_channel";
var activity_channel = "@activity_channel";
var file_name = "Neon Hub WebApp Source Code";
var ref_target = 5;
var force_channels = ["@nxt_coder"];

Bot.setProperty("admin_id", admin_id, "integer");
Bot.setProperty("agent_id", agent_id, "integer");
Bot.setProperty("agent_username", agent_username, "string");
Bot.setProperty("support_username", support_username, "string");
Bot.setProperty("withdraw_channel", withdraw_channel, "string");
Bot.setProperty("activity_channel", activity_channel, "string");
Bot.setProperty("file_name", file_name, "string");
Bot.setProperty("ref_target", ref_target, "integer");
Bot.setProperty("force_channels", force_channels, "json");
Bot.setProperty("auto_activity_posts", true, "boolean");

Bot.setProperty("welcome_title", "🏡 Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ Mᴀɪɴ Mᴇɴᴜ", "string");
Bot.setProperty("welcome_subtitle", "Iɴᴠɪᴛᴇ ғʀɪᴇɴᴅs & ᴇᴀʀɴ ᴘʀᴇᴍɪᴜᴍ ʀᴇᴡᴀʀᴅs ᴛᴏᴅᴀʏ.", "string");
Bot.setProperty("bot_brand", "Premium Script Bot", "string");
Bot.setProperty("reward_text", ref_target + " Rᴇғᴇʀʀᴀʟs = 1 Pʀᴇᴍɪᴜᴍ Fɪʟᴇ", "string");

if (!Bot.getProperty("total_users")) { Bot.setProperty("total_users", 0, "integer"); }
if (!Bot.getProperty("total_keys")) { Bot.setProperty("total_keys", 0, "integer"); }
if (!Bot.getProperty("total_withdraw")) { Bot.setProperty("total_withdraw", 0, "integer"); }
if (!Bot.getProperty("all_users")) { Bot.setProperty("all_users", [], "json"); }
if (!Bot.getProperty("pending_keys")) { Bot.setProperty("pending_keys", [], "json"); }
if (!Bot.getProperty("agents")) { Bot.setProperty("agents", [agent_id], "json"); }
if (!Bot.getProperty("banned_users")) { Bot.setProperty("banned_users", [], "json"); }
if (!Bot.getProperty("total_approved")) { Bot.setProperty("total_approved", 0, "integer"); }
if (!Bot.getProperty("total_rejected")) { Bot.setProperty("total_rejected", 0, "integer"); }

Bot.setProperty("admin_setup", true, "boolean");

var line = "━━━━━━━━━━━━━━━━";
var msg = "✅ *Cᴏɴғɪɢ Sᴀᴠᴇᴅ Sᴜᴄᴄᴇssғᴜʟʟʏ!*\n\n" + line + "\n";
msg += "👑 Aᴅᴍɪɴ ID: `" + admin_id + "`\n";
msg += "👨‍💻 Aɢᴇɴᴛ: " + agent_username + "\n";
msg += "📁 Fɪʟᴇ: *" + file_name + "*\n";
msg += "🎯 Rᴇғ Tᴀʀɢᴇᴛ: *" + ref_target + "*\n";
msg += "📢 Cʜᴀɴɴᴇʟs: *" + force_channels.length + "*\n" + line;

Bot.sendMessage(msg, {parse_mode: "Markdown"});
