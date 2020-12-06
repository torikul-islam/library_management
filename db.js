const mongoose = require('mongoose');
const config = require('config');



mongoose.connect(config.get('dbUrl'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log('Connected to mongodb...'))
    .catch((err) => { throw Error(err) });


module.exports = mongoose;