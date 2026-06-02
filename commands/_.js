/*CMD
  command: *
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

var msg = message;
var uid = user.telegramid;

// Ban check
var banned = Bot.getProperty("banned_users", []);
if (banned.indexOf(uid) >= 0) {
    Bot.sendMessage("🚫 *Yᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ.*", {parse_mode: "Markdown"});
    return;
}

// User menu routes
if (msg == "👤 ᴍʏ ᴀᴄᴄᴏᴜɴᴛ")          { Bot.runCommand("my_account"); return; }
if (msg == "👥 ʀᴇғᴇʀ & ᴇᴀʀɴ")         { Bot.runCommand("refer"); return; }
if (msg == "💰 ɪɴᴄᴏᴍᴇ")               { Bot.runCommand("income"); return; }
if (msg == "🎁 ᴡɪᴛʜᴅʀᴀᴡ")             { Bot.runCommand("withdraw"); return; }
if (msg == "🔑 ᴍʏ ᴋᴇʏs")              { Bot.runCommand("my_keys"); return; }
if (msg == "🏆 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ")          { Bot.runCommand("leaderboard"); return; }
if (msg == "📜 ʀᴜʟᴇs")                { Bot.runCommand("rules"); return; }
if (msg == "ℹ️ ʜᴏᴡ ɪᴛ ᴡᴏʀᴋs")        { Bot.runCommand("how_it_works"); return; }
if (msg == "💬 sᴜᴘᴘᴏʀᴛ")              { Bot.runCommand("support"); return; }

// Admin menu routes
var admin_id = Bot.getProperty("admin_id");
if (uid == admin_id || Bot.getProperty("agents", []).indexOf(uid) >= 0) {
    if (msg == "👑 ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ")         { Bot.runCommand("admin_panel"); return; }

    // Settings sub-menu
    if (msg == "✏️ Cʜᴀɴɢᴇ Rᴇғᴇʀʀᴀʟ")     { Bot.runCommand("set_target"); return; }
    if (msg == "👨‍💻 Cʜᴀɴɢᴇ Aɢᴇɴᴛ Usᴇʀɴᴀᴍᴇ") { Bot.runCommand("set_agent"); return; }
    if (msg == "📁 Sᴇᴛ Fɪʟᴇ Nᴀᴍᴇ")       { Bot.runCommand("set_file"); return; }
    if (msg == "💬 Sᴇᴛ Sᴜᴘᴘᴏʀᴛ")          { Bot.runCommand("set_support"); return; }
    if (msg == "📦 Sᴇᴛ Wɪᴛʜᴅʀᴀᴡ Cʜᴀɴɴᴇʟ") { Bot.runCommand("set_wdchannel"); return; }
    if (msg == "📡 Sᴇᴛ Aᴄᴛɪᴠɪᴛʏ Cʜᴀɴɴᴇʟ") { Bot.runCommand("set_actchannel"); return; }
    if (msg == "🆔 Cʜᴀɴɢᴇ Aɢᴇɴᴛ ID")      { Bot.runCommand("set_agentid"); return; }
    if (msg == "📂 Sᴇᴛ Sᴄʀɪᴘᴛ Fɪʟᴇ")      { Bot.runCommand("set_scriptfile"); return; }

    // Customize UI
    if (msg == "🏷️ Sᴇᴛ Bʀᴀɴᴅ Nᴀᴍᴇ")     { Bot.runCommand("set_brand"); return; }
    if (msg == "🏡 Sᴇᴛ Wᴇʟᴄᴏᴍᴇ Tɪᴛʟᴇ")   { Bot.runCommand("set_title"); return; }
    if (msg == "📝 Sᴇᴛ Sᴜʙᴛɪᴛʟᴇ")         { Bot.runCommand("set_subtitle"); return; }
    if (msg == "🎁 Sᴇᴛ Rᴇᴡᴀʀᴅ Tᴇxᴛ")      { Bot.runCommand("set_rewardtext"); return; }

    // Force join
    if (msg == "➕ Aᴅᴅ Cʜᴀɴɴᴇʟ")          { Bot.runCommand("add_channel"); return; }
    if (msg == "➖ Rᴇᴍᴏᴠᴇ Cʜᴀɴɴᴇʟ")        { Bot.runCommand("remove_channel"); return; }

    // Activity
    if (msg == "✅ Aᴄᴛɪᴠɪᴛʏ ON")           { Bot.setProperty("auto_activity_posts", true, "boolean"); Bot.sendMessage("✅ Aᴄᴛɪᴠɪᴛʏ ᴘᴏsᴛs ᴇɴᴀʙʟᴇᴅ."); Bot.runCommand("activity_panel"); return; }
    if (msg == "❌ Aᴄᴛɪᴠɪᴛʏ OFF")          { Bot.setProperty("auto_activity_posts", false, "boolean"); Bot.sendMessage("❌ Aᴄᴛɪᴠɪᴛʏ ᴘᴏsᴛs ᴅɪsᴀʙʟᴇᴅ."); Bot.runCommand("activity_panel"); return; }
    if (msg == "📡 Sᴇᴛ Aᴄᴛɪᴠɪᴛʏ Cʜᴀɴɴᴇʟ") { Bot.runCommand("set_actchannel"); return; }

    // Back buttons
    if (msg == "👑 Aᴅᴍɪɴ Pᴀɴᴇʟ")          { Bot.runCommand("admin_panel"); return; }
    if (msg == "🔙 Bᴀᴄᴋ")                  { Bot.runCommand("main_menu"); return; }
}
