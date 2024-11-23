import csv
import time
import requests
from bs4 import BeautifulSoup
import signal
import sys

# 定義中止函數
def handler(signum, frame):
    print("程式終止")
    sys.exit(0)

# 設置 Ctrl+C 觸發中止
signal.signal(signal.SIGINT, handler)
print("輸入 Ctrl+C 中止...")

try:
    while True:
        file = open('board_log.csv', mode='a', newline='')
        writer = csv.writer(file)
        hotpage = requests.get("https://www.ptt.cc/bbs/index.html")
        main = BeautifulSoup(hotpage.text, 'html.parser')
        board_find = main.find_all('a', class_='board', limit=10)
        writer.writerow([time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                        ,board_find[0].find('div', class_ = 'board-name').text, board_find[0].select('span')[0].text
                        ,board_find[1].find('div', class_ = 'board-name').text, board_find[1].select('span')[0].text
                        ,board_find[2].find('div', class_ = 'board-name').text, board_find[2].select('span')[0].text
                        ,board_find[3].find('div', class_ = 'board-name').text, board_find[3].select('span')[0].text
                        ,board_find[4].find('div', class_ = 'board-name').text, board_find[4].select('span')[0].text
                        ,board_find[5].find('div', class_ = 'board-name').text, board_find[5].select('span')[0].text
                        ,board_find[6].find('div', class_ = 'board-name').text, board_find[6].select('span')[0].text
                        ,board_find[7].find('div', class_ = 'board-name').text, board_find[7].select('span')[0].text
                        ,board_find[8].find('div', class_ = 'board-name').text, board_find[8].select('span')[0].text
                        ,board_find[9].find('div', class_ = 'board-name').text, board_find[9].select('span')[0].text])
        file.close()
        time.sleep(1)
except KeyboardInterrupt:
    pass
