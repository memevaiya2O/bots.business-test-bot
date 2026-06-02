import os
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN", "")
ADMIN_IDS = [int(x) for x in os.getenv("ADMIN_IDS", "").split(",") if x.strip()]
DB_PATH = os.getenv("DB_PATH", "bot_database.db")

# Earning settings
REFERRAL_BONUS = float(os.getenv("REFERRAL_BONUS", "5.00"))
DAILY_BONUS = float(os.getenv("DAILY_BONUS", "2.00"))
TASK_REWARD = float(os.getenv("TASK_REWARD", "1.00"))
AD_REWARD = float(os.getenv("AD_REWARD", "0.50"))

# Withdrawal settings
MIN_WITHDRAW = float(os.getenv("MIN_WITHDRAW", "50.00"))
MAX_WITHDRAW = float(os.getenv("MAX_WITHDRAW", "5000.00"))

# Referral settings
REFERRAL_POINTS_PER_INVITE = int(os.getenv("REFERRAL_POINTS_PER_INVITE", "1"))
MIN_REFERRALS_FOR_WITHDRAW = int(os.getenv("MIN_REFERRALS_FOR_WITHDRAW", "5"))

# Bot info
BOT_USERNAME = os.getenv("BOT_USERNAME", "")
CHANNEL_USERNAME = os.getenv("CHANNEL_USERNAME", "")
SUPPORT_USERNAME = os.getenv("SUPPORT_USERNAME", "")

# Currency
CURRENCY_SYMBOL = os.getenv("CURRENCY_SYMBOL", "৳")
CURRENCY_NAME = os.getenv("CURRENCY_NAME", "BDT")
