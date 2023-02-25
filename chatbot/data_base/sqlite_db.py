import sqlite3 as sq


def sql_start():
    global base, cur
    base = sq.connect('uni_students.db')
    cur = base.cursor()
    if base:
        print('Data base connected OK!')
    base.execute('CREATE TABLE IF NOT EXISTS students(name TEXT, phone_number TEXT)')
    base.commit()


async def sql_add_command(state):
    async with state.proxy() as data:
        cur.execute('INSERT INTO students VALUES (?, ?)', tuple(data.values()))
        base.commit()
        print('1 line created')