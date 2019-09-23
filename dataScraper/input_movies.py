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
        conn = mysql.connector.connect(host='localhost', database='engi_cinema',user='root',password='')

        if (conn.is_connected()):
            print('%5d: Connected' % id)
            query = "INSERT INTO movies(movieID, title, rating, genre, duration, date, description, poster) VALUES(%s, %s, %s, %s, %s, %s, %s, %s)"
            args = (id, title, rating, genre, duration, date, desc, poster)
            cursor = conn.cursor()
            cursor.execute(query, args)
            conn.commit()
            cursor.close()

    except Error as e:
        print(e)

    finally:
        if (conn is not None and conn.is_connected()):
            conn.close()

def main():
    filename = 'nowPlaying'
    f = open('../database/' + filename +'.json', "r", encoding="utf8")

    if (f.mode == "r"):
        contents = f.read()
        datas = json.loads(contents)

        for data in datas:
            genre = ''
            d = data['releaseDate'].split(" ")
            
            if (d[1] == ''):
                day = d[2].split(",")[0]
                month = d[0]
                year = d[3]
            else:
                day = d[1].split(",")[0]
                month = d[0]
                year = d[2]
        
            date = year + '-' + month_convert(month) + '-' + day

            for j in data['genres']:
                genre += j + ', '

            insert_movies(data['movieID'], data['title'], data['rating'], genre[:-2], data['duration'], date, data['description'], data['poster'])

if __name__ == '__main__':
    main()