from aiogram import types, Dispatcher
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.types import ReplyKeyboardRemove
import time
from chatbot.bot_create import bot

from chatbot.keyboards.client_kb import kb_client

from chatbot.data_base import sqlite_db

from datetime import datetime


class FSMUser(StatesGroup):
    name = State()
    phone_number = State()
    date = State()


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
        data["date"] = datetime.now()
    await sqlite_db.sql_add_command(state)
    await sqlite_db.auto_delete()
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
        "Step 1: Open our website, and log in into your account. Register if you don't have. \n\n\nStep2: Open courses "
        "page. \n\n\nStep3: Pick courses which you like the most, and click the button 'Add course'\n\n\nStep4: Open "
        "Profile "
        "page, there you will see your courses.",
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
