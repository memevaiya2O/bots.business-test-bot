/*CMD
  command: admin_panel
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

var admin_id = Bot.getProperty("admin_id");
if (user.telegramid != admin_id) { Bot.sendMessage("❌ *Aᴄᴄᴇss Dᴇɴɪᴇᴅ*", {parse_mode:"Markdown"}); return; }

var total_users   = Bot.getProperty("total_users", 0);
var total_wd      = Bot.getProperty("total_withdraw", 0);
var total_app     = Bot.getProperty("total_approved", 0);
var total_rej     = Bot.getProperty("total_rejected", 0);
var pending       = Bot.getProperty("pending_keys", []);
var banned        = Bot.getProperty("banned_users", []);
var agents        = Bot.getProperty("agents", []);
var channels      = Bot.getProperty("force_channels", []);

var line = "━━━━━━━━━━━━━━━━";
var star = "✦━━━━━━━━━━━━━━━✦";

var text = star + "\n  👑 *Aᴅᴍɪɴ Cᴏɴᴛʀᴏʟ Pᴀɴᴇʟ*\n" + star + "\n\n";
text += line + "\n📊 *Lɪᴠᴇ Sᴛᴀᴛɪsᴛɪᴄs*\n" + line + "\n";
text += "👥 Tᴏᴛᴀʟ Usᴇʀs:     *" + total_users + "*\n";
text += "📦 Pᴇɴᴅɪɴɢ Rᴇǫs:   *" + pending.length + "*\n";
text += "✅ Aᴘᴘʀᴏᴠᴇᴅ:        *" + total_app + "*\n";
text += "❌ Rᴇᴊᴇᴄᴛᴇᴅ:         *" + total_rej + "*\n";
text += "💸 Tᴏᴛᴀʟ Wɪᴛʜᴅʀᴀᴡ: *" + total_wd + "*\n";
text += "🚫 Bᴀɴɴᴇᴅ Usᴇʀs:   *" + banned.length + "*\n";
text += "👨‍💻 Aɢᴇɴᴛs:          *" + agents.length + "*\n";
text += "📢 Fᴏʀᴄᴇ Cʜs:       *" + channels.length + "*\n" + line;

var buttons = [
    [{title: "📥 Pᴇɴᴅɪɴɢ Rᴇǫs (" + pending.length + ")", command: "view_pending"}],
    [{title: "📢 Bʀᴏᴀᴅᴄᴀsᴛ", command: "broadcast"}, {title: "📊 Fᴜʟʟ Sᴛᴀᴛs", command: "stats"}],
    [{title: "👤 Usᴇʀ Lᴏᴏᴋᴜᴘ", command: "user_details"}, {title: "💰 Gɪᴠᴇ Bᴀʟ", command: "give_balance"}],
    [{title: "🚫 Bᴀɴ Usᴇʀ", command: "ban_user"}, {title: "✅ Uɴʙᴀɴ Usᴇʀ", command: "unban_user"}],
    [{title: "⚙️ Sᴇᴛᴛɪɴɢs", command: "settings"}, {title: "🎨 Cᴜsᴛᴏᴍɪᴢᴇ UI", command: "customize_ui"}],
    [{title: "📢 Fᴏʀᴄᴇ Jᴏɪɴ", command: "force_join_panel"}, {title: "📡 Aᴄᴛɪᴠɪᴛʏ", command: "activity_panel"}],
    [{title: "👨‍💻 Aɢᴇɴᴛ Pᴀɴᴇʟ", command: "agent_panel"}, {title: "🔙 Mᴀɪɴ Mᴇɴᴜ", command: "main_menu"}]
];

Bot.sendInlineKeyboard(buttons, text, {parse_mode: "Markdown"});
