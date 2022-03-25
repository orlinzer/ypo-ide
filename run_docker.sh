#!/bin/bash

sudo ufw allow 8080

docker build -t your_dockerhub_username/nodejs-image-demo .

docker images

docker run --name nodejs-image-demo -p 80:8080 -d your_dockerhub_username/nodejs-image-demo

docker ps

docker login -u your_dockerhub_username

docker push your_dockerhub_username/nodejs-image-demo

docker ps

docker stop e50ad27074a7

docker images -a

docker system prune -a

docker pull your_dockerhub_username/nodejs-image-demo

docker images

docker run --name nodejs-image-demo -p 80:8080 -d your_dockerhub_username/nodejs-image-demo

docker ps

