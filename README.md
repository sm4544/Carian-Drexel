# Carian-Drexel
this is main repository for Carian project - hospital appointment booking system 

# For Frontend

Go to ClientSide folder for ui 

clone the repo

navigate to Cleint side folder

install react native cli


Please do npm install after cloning the project to install dependencies

use npm run android or react-native run-android command

to connect app to local host use "adb reverse tcp:8000 tcp:8000" change port number where back end code is running in my case it's 8000

# For backend (Optional as its availble in Heroku)

### cd to backend

### Create Virtual Environment
`py -m venv env`

### Install the requirements
`pip install -r requirements.txt`

### Run migrations (Not needed to run, run only if you have db setup on local/docker local)
`py manage.py makemigrations`
`py manage.py migrate`

### Start the application
`py manage.py runserver`
