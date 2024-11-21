import csv
import time
import requests
from bs4 import BeautifulSoup

hotpage = requests.get("https://www.ptt.cc/bbs/index.html")

main = BeautifulSoup(hotpage.text, 'html.parser')
board_find = main.find_all('a', class_='board', limit=10)

for board in board_find:
    print(board.find('div', class_ = 'board-name').text + ":" + board.select('span')[0].text)
