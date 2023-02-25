from aiogram import types, Dispatcher


async def echo_send(message: types.Message):
    if message.text == 'Hello':
        await message.answer("Hello my friend!")


def register_handlers_other(dp: Dispatcher):
    dp.register_message_handler(echo_send)
