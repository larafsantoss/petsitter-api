var express = require('express');

const userRouter = require('../routes/user.router');

module.exports = (app) => {
    app.use("/api/users", userRouter);

    app.get("/", function(req, res) {
        res.set('content-type', 'text/html');
        res.send('Great! It works. Welcome to PET API!');
    })
};