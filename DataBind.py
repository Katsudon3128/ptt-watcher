import csv
import signal
import sys
import time

# 定義中止函數
def handler(signum, frame):
    print("程式終止")
    sys.exit(0)

# 設置 Ctrl+C 觸發中止
signal.signal(signal.SIGINT, handler)
print("輸入 Ctrl+C 中止...")

try:
    while True:
        log_file = open('board_log.csv')
        data_file = open('data.csv',mode='w', newline='')

        reader = csv.reader(log_file)
        data_list = list(reader)

        writer = csv.DictWriter(data_file, ['LogTime',data_list[len(data_list)-1][1]
                                                    ,data_list[len(data_list)-1][3]
                                                    ,data_list[len(data_list)-1][5]
                                                    ,data_list[len(data_list)-1][7]
                                                    ,data_list[len(data_list)-1][9]
                                                    ,data_list[len(data_list)-1][11]
                                                    ,data_list[len(data_list)-1][13]
                                                    ,data_list[len(data_list)-1][15]
                                                    ,data_list[len(data_list)-1][17]
                                                    ,data_list[len(data_list)-1][19]], restval=0, extrasaction='ignore')
        writer.writeheader()

        # 取最新的前n筆資料寫入data
        for i in range(len(data_list)-200, len(data_list)):
            writer.writerow({'LogTime':data_list[i][0], data_list[i][1]:data_list[i][2]
                                                    , data_list[i][3]:data_list[i][4]
                                                    , data_list[i][5]:data_list[i][6]
                                                    , data_list[i][7]:data_list[i][8]
                                                    , data_list[i][9]:data_list[i][10]
                                                    , data_list[i][11]:data_list[i][12]
                                                    , data_list[i][13]:data_list[i][14]
                                                    , data_list[i][15]:data_list[i][16]
                                                    , data_list[i][17]:data_list[i][18]
                                                    , data_list[i][19]:data_list[i][20]})

        log_file.close()
        data_file.close()
        time.sleep(1)
except KeyboardInterrupt:
    pass
