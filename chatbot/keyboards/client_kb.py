from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

b1 = KeyboardButton("/CoursesGuideLine")
b2 = KeyboardButton("/CallHelp")

kb_client = ReplyKeyboardMarkup(resize_keyboard=True)

kb_client.add(b1).add(b2)
