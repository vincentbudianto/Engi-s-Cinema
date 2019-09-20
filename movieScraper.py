#Library
import bs4
import json
import copy
import os
import re
import requests
import time

#Global Variable Initialization
global header
global movie_link
global result1

#Variable Initialization
useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
email = '13517137@std.stei.itb.ac.id'
header = {'user-agent' : useragent, 'from': email}
movie_link = []
result1 = []
result2 = []

#Function and Procedure
#Procedure to scrape all restaurant links from movie.com
def scrape_movie():
	global header
	global movie_link

	for i in range(1, max):
		url = 'https://www.themoviedb.org/movie?page=' + str(i)
		request = requests.get(url, headers = header, timeout = 5)
		soup = bs4.BeautifulSoup(request.text, 'html.parser')

		#Get each restaurant's link
		restaurant_list = soup.find_all('a', href = True)

		for j in restaurant_list:
			link = str(j['href'])
			
			if ((link.startswith('//movie.com/restoran')) and not(link.endswith('.html')) and not('area' in link) and not('jenis' in link)  and not('jual' in link)  and not('list' in link)):
				if link not in movie_link:
					movie_link.append(link)

		time.sleep(2)
	
	movie_link.sort()
	get_result1()

#Procedure to store the result1s of scraping data for each restaurant
def get_result1():
	global movie_link
	global result1

	for link in movie_link:
		restaurant_url = 'https:' + link
		result1.append(get_data(restaurant_url))
		time.sleep(2)

#Function to scrape data from each restaurant
def get_data(url):
	global header

	request = requests.get(url, headers = header)
	soup = bs4.BeautifulSoup(request.content.decode('utf-8', 'ignore').replace('\u200b', ''), 'html.parser')
	
	#Get restaurant's basic information
	info = soup.find(attrs = {'class': 'gerai-info'}).find_all('li')

	#Get restaurant's category
	category = info[0].text.split(", ")

	#Get restaurant's name
	name = soup.find(attrs = {'class': 'gerai-name'}).get_text(strip = True)

	if (('TUTUP' in name) or ('LIBUR' in name)):
		name = name[:-5]

	#Get restaurant's address
	address = info[1].get_text(strip = True)[8:]

	#Get restaurant's phone number
	phone = re.sub('[^0123456789/]', '', (info[2].get_text(strip = True)[7:].replace(',', '/'))).split('/')
	
	for i in range(len(phone)):
		if (len(phone[i]) < 6):
			del phone[i]

	#Get restaurant's likes
	likes = soup.find(attrs = {'class': 'like'}).get_text(strip = True)

	#Get restaurant's dislikes
	dislikes = soup.find(attrs = {'class': 'dislike'}).get_text(strip = True)
	
	#Get restaurant's logo link
	logo = soup.find(attrs = {'class': 'gerai-logo'}).find('img')['src']

	#Get restaurant's menu id, name, price, and description
	menu = []
	menu_list = soup.find(attrs = {'class': 'menu-list'}).find_all('tr')

	if menu_list is None:
		menu.append('N/A')
	else:
		for j in range(len(menu_list)):
			if (menu_list[j].find('td')):
				item = menu_list[j].get_text(strip = True).split('Rp ')

				if (menu_list[j].find('br')):
					if (len(item) < 2):
						price = '-'
					else:
						price = item[1]
					
					food = [menu_list[j]['id'], menu_list[j].find('br').previous_sibling.replace('\t', '').replace('\n', ''), price, re.sub('[()]', '', (menu_list[j].find('br').next_sibling.get_text(strip = True)))]
				else:
					if (len(item) < 2):
						item.append('-')
					
					food = [menu_list[j]['id']] + item + ['-']
			
				menu.append(food)

	menu.sort()

	#Get restaurant's menu picture link
	photo = []
	photo_list = soup.find(attrs = {'class': 'gerai-images'}).find_all('img', attrs = {'u': 'image'})

	if photo_list is None:
		photo.append('N/A')
	else:
		for k in range(len(photo_list)):
			photo.append(photo_list[k]['src'])

	return [category, name, address, phone, likes, dislikes, logo, menu, photo]

#Procedure to convert the result1s of scraping data into a .json file
def get_json():
	global result1

	jdata = {}
	data = []
	
	#Convert result1 to json
	for res in result1:
		menu = []
		jdata['Category'] = res[0]
		jdata['Name'] = res[1]
		jdata['Address'] = res[2]
		jdata['Phone'] = res[3]
		jdata['Likes'] = res[4]
		jdata['Dislikes'] = res[5]
		jdata['Logo'] = res[6]
		menu_list = res[7]

		for i in range(len(menu_list)):
			menu.append({'Menu_ID': menu_list[i][0], 'Menu_Name': menu_list[i][1], 'Price': menu_list[i][2], 'Description': menu_list[i][3]})

		jdata['Menu'] = menu
		jdata['Photos'] = res[8]
		data.append(copy.deepcopy(jdata))
	
	#Creating .json file
	path = '../data/'
	filename = 'data.json'

	with open(os.path.join(path, filename), 'w', encoding = 'utf8') as fileout:
		json.dump(data, fileout, ensure_ascii = False, indent = 4)

#Main Program
if (__name__ == "__main__"):
    url = 'https://www.themoviedb.org/movie?page=' + str(i)
	req = requests.get(url, headers = header, timeout = 5)
	soup = bs4.BeautifulSoup(req.content.decode('utf-8', 'ignore').replace('\u200b', ''), 'html.parser')
    
	scrape_movie()
	get_json()