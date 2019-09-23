#Library
import bs4
import json
import copy
import os
import re
import requests
import time

#Variable Initialization
useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
email = '13517137@std.stei.itb.ac.id'
header = {'user-agent' : useragent, 'from': email}
movie_link = []
movie_id = []

# for i in range(1, 501):
#     url = 'https://www.themoviedb.org/movie?page=' + str(i)
#     request = requests.get(url, headers = header, timeout = 5)
#     soup = bs4.BeautifulSoup(request.text, 'html.parser')
# 
#     #Get each movie's link
#     movie_list = soup.find_all('a', href = True)
# 
#     for j in movie_list:
#         temp = str(j['href'])
#         f = open('movieLink.txt', 'a+')
#     
#         if ((temp.startswith('/movie/')) and not(temp.endswith('.html')) and not('top-rated' in temp) and not('upcoming' in temp) and not('now-playing' in temp) and not('new' in temp)):
#             link = 'https://www.themoviedb.org' + temp
#             if link not in movie_link:
#                 print('page %3d: %s' % (i, link))
#                 print()
#                 f.write('%s\n' % link)
#                 movie_link.append(link)
#     
#     print('Total link: %d' % len(movie_link))
#     print()

movie_link = [line.rstrip('\n') for line in open('movieLink.txt')]

for url in movie_link:
    imdb = url.split('/')
    movieID = int(imdb[len(imdb) - 1])
    movie_id.append(movieID)

movie_id.sort()

f = open('movieLink.txt', 'w')

for x in movie_id:
    link = 'https://www.themoviedb.org/movie/' + str(x)
    print(link)
    f.write('%s\n' % link)