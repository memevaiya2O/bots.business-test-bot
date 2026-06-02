/*CMD
  command: agent_confirm
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

var agents   = Bot.getProperty("agents", []);
var is_agent = agents.indexOf(user.telegramid) >= 0 || user.telegramid == Bot.getProperty("agent_id") || user.telegramid == Bot.getProperty("admin_id");
if (!is_agent) { Bot.sendMessage("❌ *Aᴄᴄᴇss Dᴇɴɪᴇᴅ*", {parse_mode: "Markdown"}); return; }

var key      = params;
if (!key) { Bot.sendMessage("❌ *Rᴇǫ ID ᴍɪssɪɴɢ.*", {parse_mode: "Markdown"}); return; }

// ── FIX: Search pending_keys by req_id (objects) OR legacy string ──
var pending   = Bot.getProperty("pending_keys", []);
var found_req = null;
var filtered  = [];
for (var i = 0; i < pending.length; i++) {
    var entry = pending[i];
    if (typeof entry === "object" && entry !== null) {
        if (String(entry.req_id) === String(key)) { found_req = entry; }
        else { filtered.push(entry); }
    } else {
        if (String(entry) === String(key)) {
            found_req = { user_id: Bot.getProperty("key_owner_" + key), req_id: key,
                          file: Bot.getProperty("key_file_" + key, "") };
        } else { filtered.push(entry); }
    }
}

if (!found_req || !found_req.user_id) {
    Bot.sendMessage("❌ *Rᴇǫᴜᴇsᴛ `" + key + "` ɴᴏᴛ ғᴏᴜɴᴅ.*", {parse_mode: "Markdown"});
    return;
}

var owner     = found_req.user_id;
var file_name = found_req.file || Bot.getProperty("file_name", "Premium File");
var script_id = Bot.getProperty("script_file_id", "");
var brand     = Bot.getProperty("brand_name", "PremiumBot");
var sup       = Bot.getProperty("support_username", "@support");
var line      = "━━━━━━━━━━━━━━━━";
var star      = "✦━━━━━━━━━━━━━━━✦";

Bot.setProperty("key_status_" + key, "Delivered", "string");
Bot.setProperty("pending_keys", filtered, "json");

var msg = star + "\n  🎉 *Dᴇʟɪᴠᴇʀʏ Cᴏᴍᴘʟᴇᴛᴇᴅ!*\n" + star + "\n\n" + line + "\n";
msg += "📁 Fɪʟᴇ: *" + file_name + "*\n";
msg += "🆔 Rᴇǫ: `" + key + "`\n";
msg += "✅ Sᴛᴀᴛᴜs: *Dᴇʟɪᴠᴇʀᴇᴅ*\n" + line + "\n\nEɴᴊᴏʏ ʏᴏᴜʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏɴᴛᴇɴᴛ! 🚀\nSᴜᴘᴘᴏʀᴛ: " + sup;

if (script_id) {
    Api.sendDocument({ chat_id: owner, document: script_id, caption: msg, parse_mode: "Markdown" });
} else {
    Bot.sendMessageToChatWithId(owner, msg, {parse_mode: "Markdown"});
}

// Activity post
var act_ch = Bot.getProperty("activity_channel", "");
var act_on = Bot.getProperty("auto_activity_posts", false);
if (act_on && act_ch) {
    Api.sendMessage({ chat_id: act_ch,
        text: "🎉 *" + brand + "* — Dᴇʟɪᴠᴇʀʏ Sᴜᴄᴄᴇss!\n✅ A ᴜsᴇʀ ʀᴇᴄᴇɪᴠᴇᴅ: *" + file_name + "*",
        parse_mode: "Markdown" });
}

var btns = [[{title: "📋 Aɢᴇɴᴛ Pᴀɴᴇʟ", command: "agent_panel"}]];
Bot.sendInlineKeyboard(btns, "✅ *Dᴇʟɪᴠᴇʀᴇᴅ!*\n\n🆔 `" + key + "`\n👤 Usᴇʀ: `" + owner + "`\n📋 Pᴇɴᴅɪɴɢ ʟᴇғᴛ: *" + filtered.length + "*", {parse_mode: "Markdown"});
