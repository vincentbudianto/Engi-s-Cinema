import json

import mysql.connector
from mysql.connector import Error
 
def month_convert(month):
    return {
        'January': '1',
        'February': '2',
        'March': '3',
        'April': '4',
        'May': '5',
        'June': '6',
        'July': '7',
        'August': '8',
        'September': '9',
        'October': '10',
        'November': '11',
        'December': '12',
    }[month]

def insert_movies(id, title, rating, genre, duration, date, desc, poster):
    conn = None
    try:
        conn = mysql.connector.connect(host='localhost',
        database='engi_cinema',user='root',password='')
        if (conn.is_connected()):
            print('Connected')
            query = "INSERT INTO movies(id, title, rating, genre, duration, date, description, poster) " \
            "VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"
            args = (id, title, rating, genre, duration, date, desc, poster)
            cursor = conn.cursor()
            result = cursor.execute(query, args)
            conn.commit()
            cursor.close()

    except Error as e:
        print(e)

    finally:
        if (conn is not None and conn.is_connected()):
            conn.close()

def main():
    f = open("Database/movies.json", "r", encoding="utf8")
    if (f.mode == "r"):
        contents = f.read()
        data = json.loads(contents)
        for i in data:
            genre = ''
            hour = int(i['duration'].split("h")[0])
            minute = int(i['duration'].split("m")[0].split(" ")[1])
            duration = hour * 60 + minute

            day = i['releaseDate'].split(" ")[1].split(",")[0]
            month = i['releaseDate'].split(" ")[0]
            year = i['releaseDate'].split(" ")[2]
            date = year + '-' + month_convert(month) + '-' + day

            for j in i['genres']:
                genre += j + ', '

            insert_movies(i['movieID'],i['title'],i['rating'],genre[:-2],duration,date,i['description'],i['poster'])

if __name__ == '__main__':
    main()