const mongoose = require('mongoose');
const server = 'mongodb+srv://jpdicarvalho:joaopedro14165@cluster-app-barbearia.ldlclfr.mongodb.net/?retryWrites=true&w=majority';
const database = 'myDatabase';

mongoose.connect(`${server}/${database}`,
   { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
   console.log("Banco de Dados MongoDB conectado.");
})
   .catch(err => {
      console.error("Erro na conexão com o Banco de Dados", err);
      process.exit();
   });

/*mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URL)
    .then(() => console.log('DB is Up!'))
    .catch(() => console.log('deu erro'));*/