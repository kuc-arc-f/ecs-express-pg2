# ecs-express-pg2

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2022/05/29 

 update : 

***

aws ECS + express postgres, docker sample

***
### start

```
sudo docker build . -t express-pg-repo

sudo docker run -it -p 3000:3000 express-pg-repo
```

***
### setup

* .env : user, password  etc

```
POSTGRES_DATABASE=""
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_HOST=""
POSTGRES_PORT=5432
```

***
### blog

***

