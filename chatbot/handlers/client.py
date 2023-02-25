from aiogram import types, Dispatcher
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup

from chatbot.bot_create import bot

from chatbot.keyboards.client_kb import kb_client

from chatbot.data_base import sqlite_db


class FSMUser(StatesGroup):
    name = State()
    student_id = State()

async def commands_start(message: types.message):
    await FSMUser.name.set()
    await bot.send_message(message.from_user.id, "Hello!\n" "Enter your name")


async def load_name(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data["name"] = message.text
    await FSMUser.next()
    await message.answer("Enter your student id")


async def process_number_invalid(message: types.Message):
    return await message.reply("Id gotta be a number\n" "Enter your student id")


async def load_number(message: types.Message, state: FSMContext):
    async with state.proxy() as data:
        data["student_id"] = message.text

    await sqlite_db.sql_add_command(state)

    await state.finish()
    if not message.from_user.username:
        await message.answer(
            f"Hi {data['name']}, below you can see available options.",
            reply_markup=kb_client,
        )


async def about_course_help(message: types.Message):
    await message.answer(
        "Step 1: \nStep2: ",
        reply_markup=kb_client,
        parse_mode="HTML",
    )


def register_handlers_client(dp: Dispatcher):
    dp.register_message_handler(commands_start, commands=["start"])
    dp.register_message_handler(load_name, state=FSMUser.name)
    dp.register_message_handler(
        process_number_invalid,
        lambda message: not message.text.isdigit(),
        state=FSMUser.student_id,
    )
    dp.register_message_handler(
        load_number, lambda message: message.text.isdigit(), state=FSMUser.student_id
    )
    dp.register_message_handler(about_course_help, commands=["CoursesGuideLine"])
