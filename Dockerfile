FROM php:7.4-cli
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
#didn't manage to run the both scripts
#uncomment the needed line below
#CMD [ "php", "./4/4.php" ]
CMD [ "php", "./1/1.php" ]
