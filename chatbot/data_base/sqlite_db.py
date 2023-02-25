import sqlite3 as sq


def sql_start():
    global base, cur
    base = sq.connect("uni_students.db")
    cur = base.cursor()
    if base:
        print("Data base connected OK!")
    base.execute(
        "CREATE TABLE IF NOT EXISTS students(name TEXT, phone_number TEXT, date TIMESTAMP)"
    )
    base.commit()


async def sql_add_command(state):
    async with state.proxy() as data:
        cur.execute("INSERT INTO students VALUES (?, ?, ?)", tuple(data.values()))
        base.commit()
        print("1 line created")


async def auto_delete():
    delete = "DELETE FROM students WHERE date <= datetime('now','-3 days');"
    cur.execute(delete)
    base.commit()
