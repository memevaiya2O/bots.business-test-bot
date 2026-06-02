/*CMD
  command: check_join_step
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

var channels = Bot.getProperty("force_channels", []);
var index    = User.getProperty("join_check_index", 0);

if (index >= channels.length) {
    User.setProperty("force_join_ok", true, "boolean");
    Bot.runCommand("main_menu");
    return;
}

Api.getChatMember({
    chat_id:   channels[index],
    user_id:   user.telegramid,
    on_result: "check_join_result"
});
