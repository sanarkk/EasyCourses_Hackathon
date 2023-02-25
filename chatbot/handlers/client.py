from aiogram import types, Dispatcher
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.types import ReplyKeyboardRemove

from chatbot.bot_create import bot

from chatbot.keyboards.client_kb import kb_client

from chatbot.data_base import sqlite_db


class FSMUser(StatesGroup):
    name = State()
    phone_number = State()


async def state_start(message: types.Message):
    await FSMUser.name.set()
    await bot.send_message(
        message.from_user.id,
        "We're always happy to help you!\n\n" "Enter your name",
        reply_markup=ReplyKeyboardRemove(),
    )


async def loadd_name(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data["name"] = message.text
    await FSMUser.next()
    await message.answer("Enter your phone number")


async def loadd_number(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data["phone_number"] = message.text
    await sqlite_db.sql_add_command(state)

    await state.finish()

    await message.answer(
        "Thank you for registration, we will contact you soon.",
        reply_markup=kb_client,
        parse_mode="HTML",
    )


async def commands_start(message: types.message):
    await bot.send_message(
        message.from_user.id,
        "Hello!\n" "Choose your option",
        reply_markup=kb_client,
        parse_mode="HTML",
    )


async def process_number_invalid(message: types.Message):
    return await message.reply(
        "Please, enter digits.\n" "Enter your phone number",
    )


async def about_course_help(message: types.Message):
    await message.answer(
        "Step 1: \nStep2: ",
        reply_markup=kb_client,
        parse_mode="HTML",
    )


def register_handlers_client(dp: Dispatcher):
    dp.register_message_handler(commands_start, commands=["start"])
    dp.register_message_handler(loadd_name, state=FSMUser.name)
    dp.register_message_handler(
        process_number_invalid,
        lambda message: not message.text.isdigit(),
        state=FSMUser.phone_number,
    )
    dp.register_message_handler(
        loadd_number, lambda message: message.text.isdigit(), state=FSMUser.phone_number
    )
    dp.register_message_handler(about_course_help, commands=["CoursesGuideLine"])
    dp.register_message_handler(state_start, commands=["CallHelp"])
