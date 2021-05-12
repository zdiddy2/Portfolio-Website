## About the Project 
This website is my main portfolio project. I am hosting my own nodejs webserver on a raspberry pi 4 model b. I decided that the best way to showcase my other projects was with a full stack website. This website is not currently being hosted, The raspberry pi is being used for something else now.
## Built With
- Debian (buster)
	- Formally a fork of debian buster called raspberry pi os, this is the OS that everything is hosted on. I am fairly new to linux but I can set up common uses.
- UFW
	- UFW is the firewall I use to limit ssh connections, I uses openssh keys to connect to my raspberry pi and the firewall is to help mitigate any ssh attacks
- CERTBOT
	- LetsEncrypt certbot is handling the generation and renewal of my websites certificates
- OPENSSH
	- OPENSSH is what i use to connect for remote development/management, it also generated the key and public key for connecting
- NodeJS
	- NodeJS is the server runtime environment I am using, it is running an express app using pug as the default view engine.
- Node Supervisor
	- Node Supervisor is what runs the node server and it automatically updates the code when the master branch is updated. The webhook and commands for pulling the github
	repository are in routes/index.js
