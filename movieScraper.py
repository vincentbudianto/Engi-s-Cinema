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
global movieID
global movie_link
global result

#Variable Initialization
useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
email = '13517137@std.stei.itb.ac.id'
header = {'user-agent' : useragent, 'from': email}
movieID = 1
movie_link = []
result = []

#Function and Procedure
#Procedure to scrape all movie links from themoviedb.org
def scrape_movie():
	global header
	global movie_link

	for i in range(1, 501):
		url = 'https://www.themoviedb.org/movie?page=' + str(i)
		request = requests.get(url, headers = header, timeout = 5)
		soup = bs4.BeautifulSoup(request.text, 'html.parser')

		#Get each restaurant's link
		movie_list = soup.find_all('a', href = True)

		for j in movie_list:
			temp = str(j['href'])
			
			if ((temp.startswith('/movie/')) and not(temp.endswith('.html')) and not('top-rated' in temp) and not('upcoming' in temp) and not('now-playing' in temp) and not('new' in temp)):
				link = 'https://www.themoviedb.org' + temp
				if link not in movie_link:
					movie_link.append(link)

		time.sleep(2)
	
	movie_link.sort()
	get_result()

#Procedure to store the results of scraping data for each restaurant
def get_result():
	global movieID
	global movie_link
	global result

	for link in movie_link:
		movie_url = link
		print(movie_url)
		print()
		result.append(get_data(movie_url))
		movieID += 1
		time.sleep(2)

#Function to scrape data from each restaurant
def get_data(url):
	global header
	global movieID

	request = requests.get(url, headers = header)
	soup = bs4.BeautifulSoup(request.content.decode('utf-8', 'ignore').replace('\u200b', ''), 'html.parser')
	
	#Get movie's title
	title = soup.find(attrs = {'class': 'title'}).find('h2').get_text(strip = True)

	#Get movie's rating
	rating = soup.find(attrs = {'class': 'user_score_chart'})['data-percent']

	#Get movie's genre
	genres = []
	genreList = soup.find(attrs = {'class': 'genres right_column'}).find_all('li')

	for genre in genreList:
		genres.append(genre.get_text(strip = True))
	
	genres.sort()

	#Get movie's duration
	temp_duration = soup.find(attrs = {'class': 'facts left_column'}).find_all("p")

	for temp in temp_duration:
		if ('Runtime' in temp.get_text(strip = True)):
			duration = temp.get_text(strip = True).replace('Runtime','')
	
	#Get movie's releases date
	date = soup.find(attrs = {'class': 'releases'}).find('li').find('img').next_sibling.strip()
	
	#Get movie's description
	description = soup.find(attrs = {'class': 'overview'}).get_text(strip = True)

	#Get movie's poster link
	poster = soup.find(attrs = {'class': 'image_content'}).find('a', href = True).find(attrs = {'class': 'poster preview'})['src']

	#Get movie's review
#	avatars = []
#	infos = []
#	reviewList = []
#	reviews = []
#	reviewerPic = []
#	reviewerName = []
#	reviewRating = []
#	reviewBody = []
#
#	reviewCount = soup.find(attrs = {'class': 'review'}).find(attrs = {'class': 'media_panel'}).find('span').get_text(strip = True)
#	
#	if (int(reviewCount) > 0):
#		request = requests.get((url + '/reviews'), headers = header)
#		soup = bs4.BeautifulSoup(request.content.decode('utf-8', 'ignore').replace('\u200b', ''), 'html.parser')
#	
#		avatars = soup.find(attrs = {'class': 'review_container'}).find_all(attrs = {'class': 'avatar'})
#		infos = soup.find(attrs = {'class': 'review_container'}).find_all(attrs = {'class': 'rating_wrapper'})
#		reviewList = soup.find(attrs = {'class': 'review_container'}).find_all(attrs = {'class': 'teaser'})
#
#	for avatar in avatars:
#		if (avatar.find('a') != None):
#			if (avatar.find('img') != None):
#				pic = avatar.find('img')['data-src']
#			else:
#				pic = "-"
#			
#			reviewerPic.append(pic)
#
#
#	for info in infos:
#		name = info.find('h3').get_text(strip = True).replace('A review by ','')
#		rate = info.find(attrs = {'class': 'rounded rating'}).get_text(strip = True)
#		reviewerName.append(name)
#		reviewRating.append(rate)
#
#	for review in reviewList:
#		if (review.find('a') == None):
#			body = review.get_text(strip = True)
#		else:
#			link = 'https://www.themoviedb.org' + review.find('a')['href']
#			request = requests.get(link, headers = header)
#			soupReview = bs4.BeautifulSoup(request.content.decode('utf-8', 'ignore').replace('\u200b', ''), 'html.parser')
#			body = soupReview.find('p').get_text(strip = True)
#		
#		reviewBody.append(body)
#	
#	reviews.append(reviewerPic)
#	reviews.append(reviewerName)
#	reviews.append(reviewRating)
#	reviews.append(reviewBody)
#
	return [movieID, title, rating, genres, duration, date, description, poster]

#Procedure to convert the movies results of scraping data into a .json file
def getMovie_json():
	global result

	count = 1
	jdata = {}
	data = []
	
	#Convert result to json
	for res in result:
		jdata['movieID'] = res[0]
		jdata['title'] = res[1]
		jdata['rating'] = res[2]
		jdata['genres'] = res[3]
		jdata['duration'] = res[4]
		jdata['releaseDate'] = res[5]
		jdata['description'] = res[6]
		jdata['poster'] = res[7]
		data.append(copy.deepcopy(jdata))
		count += 1
	
	#Creating .json file
	path = 'database/'
	filename = 'movies.json'

	with open(os.path.join(path, filename), 'w', encoding = 'utf8') as fileout:
		json.dump(data, fileout, ensure_ascii = False, indent = 4)

#Procedure to convert the reviews results of scraping data into a .json file
# def getReview_json():
# 	global result
# 
# 	count = 1
# 	jdata = {}
# 	data = []
# 	
# 	#Convert result to json
# 	for res in result:
# 		reviewed = []
# 		reviewList = res[6][1]
# 		
# 		for i in range(len(reviewList)):
# 			reviewed.append({'reviewID': count, 'movieID': res[0], 'username': res[6][1], 'rating': res[6][2], 'review': res[6][3], 'profile picture': res[6][0]})
# 			count += 1
# 
# 		jdata['reviews'] = reviewed
# 		data.append(copy.deepcopy(jdata))
# 	
# 	#Creating .json file
# 	path = 'database/'
# 	filename = 'reviews.json'
# 
# 	with open(os.path.join(path, filename), 'w', encoding = 'utf8') as fileout:
# 		json.dump(data, fileout, ensure_ascii = False, indent = 4)

#Main Program
if (__name__ == "__main__"):
    scrape_movie()
    getMovie_json()
#   getReview_json()
