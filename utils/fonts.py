SMALL_CAPS = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ',
    'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ',
    'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'Q', 'r': 'ʀ',
    's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
    'y': 'ʏ', 'z': 'ᴢ',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
}

def sc(text: str) -> str:
    return ''.join(SMALL_CAPS.get(c.lower(), c) for c in text)

def bold_sc(text: str) -> str:
    return f"*{sc(text)}*"

LINE = "━━━━━━━━━━━━━━━━"
LINE_THIN = "─────────────────"
STAR_LINE = "✦━━━━━━━━━━━━━━━✦"

def section(title: str, emoji: str = "") -> str:
    prefix = f"{emoji} " if emoji else ""
    return f"{LINE}\n{prefix}{sc(title)}\n{LINE}"

def header(title: str, emoji: str = "") -> str:
    prefix = f"{emoji} " if emoji else ""
    return f"{STAR_LINE}\n  {prefix}{sc(title)}\n{STAR_LINE}"

def progress_bar(current: int, total: int, length: int = 10) -> str:
    if total == 0:
        filled = 0
    else:
        filled = int((current / total) * length)
    bar = "▰" * filled + "▱" * (length - filled)
    return bar

def fmt_balance(amount: float) -> str:
    return f"৳{amount:,.2f}"

def fmt_points(points: int) -> str:
    return f"{points:,} ᴘᴛs"
