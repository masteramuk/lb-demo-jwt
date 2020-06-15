# lb-demo-jwt

A loopback-based RESTful API services with basic JWT Authentication method for demonstration purposes.

### Description
Create a simple REST API that accepts GET/POST request, deploy it in any application server.
1.	API should be able to perform CRUD operations
2.	Implement any authentication/authorization mechanism to secure the API 
3.	Request & response is in JSON format
4.	Share the endpoint URL for the testing
Bonus:
-	Add AES-128/256 encrypted value in 1 of the request & response content (The candidate expected to share the required credential during the interview.

### Info
The projet is developed using loopbackJS and MySql as the database. It is running on top of ExpressJS and implemented JWT as the authentication method to authenticate user before allowed to access any of the endpoint (currently only endpoint Tdemo is secured for demonstration purposes)

### Requirement
1. NPM and NodeJs (latest)
2. Loopback API (refer to [https://loopback.io/doc/en/lb4](https://loopback.io/doc/en/lb4)) for detail

### How to execute:
1. Export the database (in folder dbfile). Once the database is created, please do check via your preferred IDE
2. Clone the git
3. run **npm i** to install necesary node modules. Browse the code and find the datasource file. Edit the datasource to change to your datasource username and password.
4. run **npm start** in the main folder of the code 
5. Browse to http://localhost:3000/api/explorer for swagger type of API explorer
6. Login using Post/login with username: **testuser2@abc.com** and password: **testuser2** (you may create username by supplying only email and password through Post/signup API
7. Copy the token return from the explorer, click the button **Activate** on top of the explorer and paste the token.
8. Perform your Get and Post using the explorer via the api explorer (browse below to the list to find out available API)


[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)
