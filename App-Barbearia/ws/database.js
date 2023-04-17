const mongoose = require('mongoose');
const URL = '';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URL)
    .then(() => console.log('DB is Up!'))
    .catch(() => console.log(err));