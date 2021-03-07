import datetime

class Constants:
    images = ['https://source.unsplash.com/1024x768/?nature','https://source.unsplash.com/1024x768/?water',"https://source.unsplash.com/1024x768/?girl","https://source.unsplash.com/1024x768/?tree"]
    SECRET_KEY = "hkBxrbZ9Td4QEwgRewV6gZSVH4q78vBia4GBYuqd09SsiMsIjH"
    FERNET_KEY = b'Jbx7Zr2pQ3YgKei404YLNqS_fx_mmUPHd-ryjDGg2wM='
    days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    def time_splitter(ml) -> datetime.datetime:
        _date = ml.split(' ')[0]
        year = int(_date.split('-')[0])
        month = int(_date.split('-')[1])
        dt = int(_date.split('-')[2])
        ts = ml.split(' ')[1]
        hour = int(ts.split('.')[0].split(':')[0])
        min = int(ts.split('.')[0].split(':')[1])
        seconds = ts.split('.')[0].split(':')[2].split('.')[0]
        #print(datetime.datetime(year, month, dt, hour, min, 0))
        return datetime.datetime(year, month, dt, hour, min, 0)