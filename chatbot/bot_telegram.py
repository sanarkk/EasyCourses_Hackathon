from aiogram.utils import executor
from bot_create import dp
from handlers import client, admin, other
from data_base import sqlite_db


async def on_startup(_):
    print('Bot started')
    sqlite_db.sql_start()


client.register_handlers_client(dp)
other.register_handlers_other(dp)

executor.start_polling(dp, skip_updates=True, on_startup=on_startup)
