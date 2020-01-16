# EventLoop consideration

The NodeJS runtime desing is called EventLoop, is an infinite loop that listens events and executes functions, that is the magic of the asynchronousity of NodeJS, but this pattern has its problems, if some bug creates an infinite loop can block our server.

## Apache - PHP Comparition

At Apache PHP server open a thread in each request, for this reason in PHP is more dificult create a blocking process.

## About this practical exercise

1. Clone or download the project
2. Execute docker-compose up
3. Test NodeJS Sever: http://localhost:3000/normal --> response: normal
4. Test Apache Server: http://localhost:3001/normal.php --> response: normal
5. Blocking NodeJS: http://localhost:3000/loop --> no response, infinite Loop
6. Test NodeJS Sever: http://localhost:3000/normal --> expecting response: normal, but not response, event loop is blocking.
7. PHP Loop: http://localhost:3001/loop.php --> response: counting numbers, 
8. Test PHP Sever: http://localhost:3001/normal.php --> response: normal

