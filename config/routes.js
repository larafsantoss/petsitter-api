const express = require('express');

const userRouter = require('../routes/user.router');

module.exports = (app) => {
    app.use("/api/users", userRouter);

};

