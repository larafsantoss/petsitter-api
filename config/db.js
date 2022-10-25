const mongoose = require('mongoose');

    mongoose.connect("mongodb+srv://petsitter2:petsitter@petsitter-cluster.b2xse83.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.set('useCreateIndex', true);


module.exports = mongoose.connection;