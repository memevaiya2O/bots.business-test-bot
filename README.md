# 🤖 Premium Referral Bot — BB Export

A fully-featured **bots.business** Telegram bot with referral system, income tracking, daily check-in, and a complete admin panel.

## ✨ Features

### 👤 User Features
- `/start` — Auto referral tracking, force-join check
- **My Account** — Full profile with progress bar
- **Refer & Earn** — Referral link with share button + progress stats
- **Income** — Earnings overview + Daily Check-in bonus (+1 pt/day) with streak tracking
- **Withdraw** — Claim reward when referral target is met
- **My Keys** — View earned files/keys
- **Leaderboard** — Top 10 referrers with medals & rank
- **Rules** — Bot rules
- **How It Works** — Step-by-step guide
- **Support** — Contact support & agent

### 👑 Admin Panel
- 📊 **Live Statistics** — Users, pending, approved, rejected, banned
- 📥 **Pending Requests** — Approve / Reject / Skip with inline buttons
- 📢 **Broadcast** — Send message to all users (with sent/failed count)
- 👤 **User Lookup** — View user info, give/remove points, ban/unban
- 💰 **Give Balance** — Add points to any user
- 🚫 **Ban / Unban User** — With auto notification
- ⚙️ **Settings** — Set referral target, file name, agent, support, channels
- 🎨 **Customize UI** — Brand name, welcome title, subtitle, reward text
- 📢 **Force Join Manager** — Add/remove channels
- 📡 **Activity Panel** — Auto-post to activity channel (toggle on/off)
- 👨‍💻 **Agent Panel** — View & manage pending deliveries

## 🚀 Setup

1. Import this bot into **bots.business**
2. Run the `config` command as admin to initialize all settings
3. Set your admin ID in `config.js`
4. Configure channels, agent, support usernames

## 📁 File Structure

```
commands/
├── config.js          — Initial setup
├── _start.js          — /start handler
├── _.js               — Keyboard router
├── _admin.js          — /admin command
├── main_menu.js       — Main menu
├── my_account.js      — User profile
├── income.js          — Income section
├── daily_checkin.js   — Daily bonus
├── refer.js           — Referral system
├── withdraw.js        — Withdrawal
├── my_keys.js         — User keys
├── leaderboard.js     — Top referrers
├── rules.js           — Bot rules
├── how_it_works.js    — Guide
├── support.js         — Support
├── admin_panel.js     — Admin dashboard
├── view_pending.js    — Pending requests
├── approve_req.js     — Approve request
├── reject_req.js      — Reject request
├── skip_req.js        — Skip request
├── stats.js           — Full statistics
├── broadcast.js       — Broadcast setup
├── broadcast_send.js  — Send broadcast
├── ban_user.js        — Ban user
├── unban_user.js      — Unban user
├── give_balance.js    — Give points
├── user_details.js    — User lookup
├── get_user_info.js   — User info display
├── settings.js        — Bot settings
├── bot_settings.js    — Settings overview
├── set_target.js      — Set referral target
├── set_file.js        — Set file name
├── set_agent.js       — Set agent username
├── set_agentid.js     — Set agent ID
├── set_support.js     — Set support username
├── set_wdchannel.js   — Set withdraw channel
├── set_actchannel.js  — Set activity channel
├── set_scriptfile.js  — Set script file
├── customize_ui.js    — UI customization
├── set_brand.js       — Set brand name
├── set_title.js       — Set welcome title
├── set_subtitle.js    — Set subtitle
├── set_rewardtext.js  — Set reward text
├── force_join_panel.js — Force join manager
├── add_channel.js     — Add force channel
├── remove_channel.js  — Remove force channel
├── check_join.js      — Force join check
├── check_join_step.js — Check per channel
├── check_join_result.js — Join result handler
├── activity_panel.js  — Activity settings
├── agent_panel.js     — Agent view
├── agent_confirm.js   — Agent delivery confirm
└── agent_cancel.js    — Agent delivery cancel
```

## 🎨 UI Style

All messages use **Unicode Small Caps** for a premium look:
```
✦━━━━━━━━━━━━━━━✦
  👤 Mʏ Pʀᴏғɪʟᴇ
✦━━━━━━━━━━━━━━━✦

💰 Pᴏɪɴᴛs: 3/5  ▰▰▰▰▰▰▱▱▱▱  60%
```
