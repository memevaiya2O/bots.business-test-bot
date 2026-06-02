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

// ── Ban check ──────────────────────────────────────────────────
var banned = Bot.getProperty("banned_users", []);
if (banned.indexOf(uid) >= 0) {
    Bot.sendMessage("🚫 *Yᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ.*", {parse_mode: "Markdown"});
    return;
}

// ── Pending action handler (admin awaiting input) ──────────────
var pending = User.getProperty("pending_action", "");
if (pending) {
    if (msg === "/cancel") {
        User.setProperty("pending_action", "", "string");
        Bot.sendMessage("🚫 *Cᴀɴᴄᴇʟʟᴇᴅ.*", {parse_mode: "Markdown"});
        Bot.runCommand("admin_panel");
        return;
    }
    User.setProperty("pending_action", "", "string");

    // Admin input actions
    if (pending === "broadcast_send")  { Bot.runCommand("broadcast_send");         return; }
    if (pending === "ban_user")        { Bot.runCommand("ban_user " + msg);        return; }
    if (pending === "unban_user")      { Bot.runCommand("unban_user " + msg);      return; }
    if (pending === "give_balance")    { Bot.runCommand("give_balance " + msg);    return; }
    if (pending === "get_user_info")   { Bot.runCommand("get_user_info");          return; }

    // Settings input actions
    if (pending === "set_target")      { Bot.runCommand("set_target " + msg);      return; }
    if (pending === "set_file")        { Bot.runCommand("set_file " + msg);        return; }
    if (pending === "set_agent")       { Bot.runCommand("set_agent " + msg);       return; }
    if (pending === "set_agentid")     { Bot.runCommand("set_agentid " + msg);     return; }
    if (pending === "set_support")     { Bot.runCommand("set_support " + msg);     return; }
    if (pending === "set_wdchannel")   { Bot.runCommand("set_wdchannel " + msg);   return; }
    if (pending === "set_actchannel")  { Bot.runCommand("set_actchannel " + msg);  return; }
    if (pending === "set_brand")       { Bot.runCommand("set_brand " + msg);       return; }
    if (pending === "set_title")       { Bot.runCommand("set_title " + msg);       return; }
    if (pending === "set_subtitle")    { Bot.runCommand("set_subtitle " + msg);    return; }
    if (pending === "set_rewardtext")  { Bot.runCommand("set_rewardtext " + msg);  return; }
    if (pending === "add_channel")     { Bot.runCommand("add_channel " + msg);     return; }
    if (pending === "remove_channel")  { Bot.runCommand("remove_channel " + msg);  return; }

    // Script file upload
    if (pending === "set_scriptfile") {
        var file_id = "";
        if (request && request.document) { file_id = request.document.file_id; }
        else if (request && request.photo) { file_id = request.photo[request.photo.length - 1].file_id; }
        else { file_id = msg; }
        if (!file_id) { Bot.sendMessage("❌ Pʟᴇᴀsᴇ sᴇɴᴅ ᴀ ᴠᴀʟɪᴅ ᴅᴏᴄᴜᴍᴇɴᴛ."); return; }
        Bot.setProperty("script_file_id", file_id, "string");
        var b = [[{title: "🔙 Sᴇᴛᴛɪɴɢs", command: "settings"}]];
        Bot.sendInlineKeyboard(b, "✅ *Sᴄʀɪᴘᴛ ꜰɪʟᴇ sᴀᴠᴇᴅ!*\n\n🆔 `" + file_id + "`", {parse_mode: "Markdown"});
        return;
    }
}

// ── User menu ──────────────────────────────────────────────────
if (msg === "👤 ᴍʏ ᴀᴄᴄᴏᴜɴᴛ")          { Bot.runCommand("my_account");    return; }
if (msg === "👥 ʀᴇғᴇʀ & ᴇᴀʀɴ")         { Bot.runCommand("refer");         return; }
if (msg === "💰 ɪɴᴄᴏᴍᴇ")               { Bot.runCommand("income");        return; }
if (msg === "🎁 ᴡɪᴛʜᴅʀᴀᴡ")             { Bot.runCommand("withdraw");      return; }
if (msg === "🔑 ᴍʏ ᴋᴇʏs")              { Bot.runCommand("my_keys");       return; }
if (msg === "🏆 ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ")          { Bot.runCommand("leaderboard");   return; }
if (msg === "📜 ʀᴜʟᴇs")                { Bot.runCommand("rules");         return; }
if (msg === "ℹ️ ʜᴏᴡ ɪᴛ ᴡᴏʀᴋs")        { Bot.runCommand("how_it_works");  return; }
if (msg === "💬 sᴜᴘᴘᴏʀᴛ")              { Bot.runCommand("support");       return; }

// ── Admin/Agent menu ───────────────────────────────────────────
var admin_id = Bot.getProperty("admin_id");
var agents   = Bot.getProperty("agents", []);
var is_admin = (uid == admin_id);
var is_agent = is_admin || agents.indexOf(uid) >= 0 || uid == Bot.getProperty("agent_id");

if (is_admin) {
    if (msg === "👑 ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ")              { Bot.runCommand("admin_panel");      return; }
    if (msg === "👑 Aᴅᴍɪɴ Pᴀɴᴇʟ")               { Bot.runCommand("admin_panel");      return; }
    if (msg === "🔙 Bᴀᴄᴋ")                      { Bot.runCommand("main_menu");        return; }

    // Settings sub-menu
    if (msg === "✏️ Cʜᴀɴɢᴇ Rᴇғᴇʀʀᴀʟ")           { Bot.runCommand("set_target");       return; }
    if (msg === "👨‍💻 Cʜᴀɴɢᴇ Aɢᴇɴᴛ Usᴇʀɴᴀᴍᴇ")     { Bot.runCommand("set_agent");        return; }
    if (msg === "🆔 Cʜᴀɴɢᴇ Aɢᴇɴᴛ ID")            { Bot.runCommand("set_agentid");      return; }
    if (msg === "📁 Sᴇᴛ Fɪʟᴇ Nᴀᴍᴇ")             { Bot.runCommand("set_file");         return; }
    if (msg === "💬 Sᴇᴛ Sᴜᴘᴘᴏʀᴛ")                { Bot.runCommand("set_support");      return; }
    if (msg === "📦 Sᴇᴛ Wɪᴛʜᴅʀᴀᴡ Cʜᴀɴɴᴇʟ")       { Bot.runCommand("set_wdchannel");    return; }
    if (msg === "📡 Sᴇᴛ Aᴄᴛɪᴠɪᴛʏ Cʜᴀɴɴᴇʟ")       { Bot.runCommand("set_actchannel");   return; }
    if (msg === "📂 Sᴇᴛ Sᴄʀɪᴘᴛ Fɪʟᴇ")            { Bot.runCommand("set_scriptfile");   return; }

    // Customize UI sub-menu
    if (msg === "🏷️ Sᴇᴛ Bʀᴀɴᴅ Nᴀᴍᴇ")            { Bot.runCommand("set_brand");        return; }
    if (msg === "🏡 Sᴇᴛ Wᴇʟᴄᴏᴍᴇ Tɪᴛʟᴇ")          { Bot.runCommand("set_title");        return; }
    if (msg === "📝 Sᴇᴛ Sᴜʙᴛɪᴛʟᴇ")               { Bot.runCommand("set_subtitle");     return; }
    if (msg === "🎁 Sᴇᴛ Rᴇᴡᴀʀᴅ Tᴇxᴛ")            { Bot.runCommand("set_rewardtext");   return; }

    // Force join sub-menu
    if (msg === "➕ Aᴅᴅ Cʜᴀɴɴᴇʟ")               { Bot.runCommand("add_channel");      return; }
    if (msg === "➖ Rᴇᴍᴏᴠᴇ Cʜᴀɴɴᴇʟ")             { Bot.runCommand("remove_channel");   return; }

    // Activity sub-menu
    if (msg === "✅ Aᴄᴛɪᴠɪᴛʏ ON")               { Bot.setProperty("auto_activity_posts", true, "boolean");  Bot.sendMessage("✅ Aᴄᴛɪᴠɪᴛʏ ᴘᴏsᴛs *ᴇɴᴀʙʟᴇᴅ*.", {parse_mode: "Markdown"}); Bot.runCommand("activity_panel"); return; }
    if (msg === "❌ Aᴄᴛɪᴠɪᴛʏ OFF")              { Bot.setProperty("auto_activity_posts", false, "boolean"); Bot.sendMessage("❌ Aᴄᴛɪᴠɪᴛʏ ᴘᴏsᴛs *ᴅɪsᴀʙʟᴇᴅ*.", {parse_mode: "Markdown"}); Bot.runCommand("activity_panel"); return; }
}
