/*CMD
  command: agent_cancel
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

var key = params;
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
            found_req = { user_id: Bot.getProperty("key_owner_" + key), req_id: key };
        } else { filtered.push(entry); }
    }
}

var sup = Bot.getProperty("support_username", "@support");

if (found_req && found_req.user_id) {
    Bot.setProperty("key_status_" + key, "Cancelled", "string");
    Bot.sendMessageToChatWithId(
        found_req.user_id,
        "❌ *Dᴇʟɪᴠᴇʀʏ Cᴀɴᴄᴇʟʟᴇᴅ*\n\n⚠️ Rᴇǫ `" + key + "` ᴡᴀs ᴄᴀɴᴄᴇʟʟᴇᴅ.\n💬 Cᴏɴᴛᴀᴄᴛ: " + sup,
        {parse_mode: "Markdown"}
    );
}

Bot.setProperty("pending_keys", filtered, "json");
var btns = [[{title: "📋 Aɢᴇɴᴛ Pᴀɴᴇʟ", command: "agent_panel"}]];
Bot.sendInlineKeyboard(btns, "❌ *Cᴀɴᴄᴇʟʟᴇᴅ*\n\n🆔 `" + key + "`\n📋 Pᴇɴᴅɪɴɢ ʟᴇғᴛ: *" + filtered.length + "*", {parse_mode: "Markdown"});
