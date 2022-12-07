npm install


curl -L -o selenium-server.jar https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.7.0/selenium-server-4.7.0.jar
java -jar selenium-server.jar standalone

DEVICE_NAME='Pixel 5' npm run test