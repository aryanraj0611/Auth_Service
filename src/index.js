const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');

const UserRepository = require('./repository/user-repository');

const UserService = require('./services/user-service');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const prepareAndStartServer = () =>{

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);
    app.listen(PORT, async ()=>{
        console.log('Server Started on PORT', PORT);

        const service = new UserService();
        // const newToken = service.createToken({email:'aryan@admin.com',id:1});
        // console.log('New Token is', newToken);  
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyeWFuQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3NzQ5NTMxNjYsImV4cCI6MTc3NDk1Njc2Nn0.4VpFpp5-1zxVbSxZV--Qtq2I6WhL1v8crlQLsTq6yNY"
        // const response = service.verifyToken(token);
        // console.log('Response after verifying the token', response);
        
    })
}

prepareAndStartServer();