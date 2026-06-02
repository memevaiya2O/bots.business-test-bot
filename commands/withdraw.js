/*CMD
  command: withdraw
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

var uid    = user.telegramid;
var target = Bot.getProperty("ref_target", 5);
var bal    = Bot.getProperty("balance_" + uid, 0);
var file   = Bot.getProperty("file_name", "Premium File");

var bar_filled = Math.floor((bal / target) * 10);
if (bar_filled > 10) bar_filled = 10;
var bar = "";
for (var bi = 0; bi < bar_filled; bi++) bar += "▰";
for (var bj = bar_filled; bj < 10; bj++) bar += "▱";

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

if (bal < target) {
    var need = target - bal;
    var text = star + "\n  🎁 *Wɪᴛʜᴅʀᴀᴡ*\n" + star + "\n\n";
    text += line + "\n";
    text += "⚠️ *Nᴏᴛ Eɴᴏᴜɢʜ Pᴏɪɴᴛs!*\n" + line + "\n";
    text += "💰 Yᴏᴜʀ Pᴏɪɴᴛs: *" + bal + " / " + target + "*\n";
    text += "📊 Pʀᴏɢʀᴇss: " + bar + "\n";
    text += "❌ Sᴛɪʟʟ Nᴇᴇᴅᴇᴅ: *" + need + " ᴍᴏʀᴇ ʀᴇғᴇʀʀᴀʟs*\n\n";
    text += line + "\n";
    text += "🎯 *Hᴏᴡ ᴛᴏ Eᴀʀɴ Fᴀsᴛᴇʀ?*\n" + line + "\n";
    text += "👥 Sʜᴀʀᴇ ʏᴏᴜʀ ʀᴇғᴇʀʀᴀʟ ʟɪɴᴋ\n";
    text += "📅 Cʟᴀɪᴍ ᴅᴀɪʟʏ ᴄʜᴇᴄᴋ-ɪɴ ʙᴏɴᴜs\n";

    var buttons = [
        [{title: "👥 Rᴇғᴇʀ & Eᴀʀɴ", command: "refer"}, {title: "💰 Iɴᴄᴏᴍᴇ", command: "income"}],
        [{title: "🏠 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
    ];
    Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});
    return;
}

// Enough points — process withdrawal
var new_bal = bal - target;
Bot.setProperty("balance_" + uid, new_bal, "integer");

var req_id = "REQ" + Date.now();
var pending = Bot.getProperty("pending_keys", []);
pending.push({
    user_id:   uid,
    user_name: user.first_name,
    req_id:    req_id,
    date:      new Date().toLocaleString(),
    file:      file
});
Bot.setProperty("pending_keys", pending, "json");

// FIX: Store legacy key_owner_ and key_file_ for agent_confirm/cancel compatibility
Bot.setProperty("key_owner_" + req_id, uid,  "integer");
Bot.setProperty("key_file_"  + req_id, file, "string");

var tot_w = Bot.getProperty("total_withdraw", 0) + 1;
Bot.setProperty("total_withdraw", tot_w, "integer");

// Notify user
var utext = star + "\n  🎉 *Wɪᴛʜᴅʀᴀᴡ Sᴜʙᴍɪᴛᴛᴇᴅ!*\n" + star + "\n\n" + line + "\n";
utext += "📁 Fɪʟᴇ: *" + file + "*\n";
utext += "🆔 Rᴇǫ ID: `" + req_id + "`\n";
utext += "⏳ Sᴛᴀᴛᴜs: *Pᴇɴᴅɪɴɢ Aᴅᴍɪɴ Aᴘᴘʀᴏᴠᴀʟ*\n";
utext += "🕐 Tɪᴍᴇ: *12-24 ʜᴏᴜʀs*\n" + line + "\n\n";
utext += "✅ Yᴏᴜ ᴡɪʟʟ ʙᴇ ɴᴏᴛɪғɪᴇᴅ ᴡʜᴇɴ ᴀᴘᴘʀᴏᴠᴇᴅ.";
Bot.sendMessage(utext, {parse_mode: "Markdown"});

// Notify admin
var admin_id = Bot.getProperty("admin_id");
var atext = "🔔 *Nᴇᴡ Wɪᴛʜᴅʀᴀᴡ Rᴇǫᴜᴇsᴛ!*\n\n" + line + "\n";
atext += "👤 Usᴇʀ: [" + user.first_name + "](tg://user?id=" + uid + ")\n";
atext += "🆔 ID: `" + uid + "`\n";
atext += "📁 Fɪʟᴇ: *" + file + "*\n";
atext += "🎫 Rᴇǫ ID: `" + req_id + "`\n" + line;

var admin_buttons = [
    [{title: "✅ Aᴘᴘʀᴏᴠᴇ", command: "approve_req " + uid + " " + req_id}, {title: "❌ Rᴇᴊᴇᴄᴛ", command: "reject_req " + uid + " " + req_id}],
    [{title: "📥 Vɪᴇᴡ Aʟʟ Pᴇɴᴅɪɴɢ", command: "view_pending"}]
];

// FIX: Bot.sendInlineKeyboardToChatWithId does not exist in BB
// Use Api.sendMessage with Telegram-native inline_keyboard format
Api.sendMessage({
    chat_id: admin_id,
    text: atext,
    parse_mode: "Markdown",
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [
                {text: "✅ Aᴘᴘʀᴏᴠᴇ", callback_data: "approve_req " + uid + " " + req_id},
                {text: "❌ Rᴇᴊᴇᴄᴛ",  callback_data: "reject_req "  + uid + " " + req_id}
            ],
            [
                {text: "📥 Vɪᴇᴡ Pᴇɴᴅɪɴɢ", callback_data: "view_pending"}
            ]
        ]
    })
});
