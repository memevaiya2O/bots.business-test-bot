/*CMD
  command: check_join
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

if (!channels || channels.length == 0) {
    Bot.runCommand("main_menu");
    return;
}

User.setProperty("join_check_index", 0, "integer");
Bot.runCommand("check_join_step");

