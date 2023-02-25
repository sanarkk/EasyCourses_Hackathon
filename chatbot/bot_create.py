from aiogram import Bot
from aiogram.dispatcher import Dispatcher
from bot_token import bot_token as BotToken
from aiogram.contrib.fsm_storage.memory import MemoryStorage


storage = MemoryStorage()

bot = Bot(token=BotToken)
dp = Dispatcher(bot, storage=storage)
