#Library
import bs4
import json
import copy
import os
import re
import requests
import time

useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
email = '13517137@std.stei.itb.ac.id'
header = {'user-agent' : useragent, 'from': email}

url = 'https://www.themoviedb.org/movie/301528'

request = requests.get(url, headers = header)
soup = bs4.BeautifulSoup(request.content.decode('utf-8', 'ignore').replace('\u200b', ''), 'html.parser')

#Get movie's duration
temp_duration = soup.find(attrs = {'class': 'facts left_column'}).find_all("p")

for temp in temp_duration:
    if ('Runtime' in temp.get_text(strip = True)):
        durations = temp.get_text(strip = True).replace('Runtime','')
        time = durations.split("h")
        hour = int(time[0])
        time2 = time[1].split("m")
        minute = int(time2[0])
        duration = hour * 60 + minute

print(hour)
print(minute)
print(duration)