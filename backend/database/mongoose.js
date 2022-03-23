const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoURI = "mongodb+srv://dbUser:dbUser@cluster0.flcq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(mongoURI, { useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Database Connected'))
    .catch((error) => console.log(error));
module.exports = mongoose;

