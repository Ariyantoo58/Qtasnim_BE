# express-sequelize-mysql-boilerplate
This is a ready to start NodeJS based ExpressJS, Sequelize, MySQL boilerplate application

1. To install application, open the terminal and go into the given code's root directory and execute below command
```
npm install
```

2. Create a database with name ***`qtasnim_db`*** in MySQL

3. Run DB-Migrate command to create tables
```
npm run db-migrate
```

4. Start the API Server
```
npm start
```

5. This will start the API server on port defined in ***`/config/index.js`*** file (Default: ***8001***). Once the API server is started you will get the below message in your terminal console, this means your API server is started successfully.
```
Listening at "http://localhost:8001"
```

6. Now access below URL from your browser to test if your API is working or not
```
http://localhost:3000/products
```

7. If you see ***`True Status`*** it means you are ready to go code...
