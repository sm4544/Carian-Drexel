# Django backend App for APIs


## How to Setup

## Docker setup for database - Postgres

### Install docker 
https://docs.docker.com/docker-for-windows/install/

### Pull postgres database image
`docker pull postgres`

### Start the postgres container by verifying container_id
`docker start <container_id>`

---------------------------------------------------------------------------

### Go to the project home directory
`cd hospitalManagementDjango`

### Create Virtual Environment
`py -m venv env`

### Install the requirements
`pip install -r requirements.txt`

### Run migrations
`py manage.py makemigrations`
`py manage.py migrate`

### Start the application
`py manage.py runserver`

