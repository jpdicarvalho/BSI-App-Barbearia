const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const models = require ('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json());
let user = models.users;
let barbearia = models.barbearia;
let horario  = models.horario;

//Cadastrando usuário falta validar
app.post('/create', async (req, res) => {
  try {
    // Verificar se os campos não estão vazios
    if (!req.body.name || !req.body.password || !req.body.email) {
      return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
    }

    const existingUser = await user.findOne({
      where: { email: req.body.email }
    });

    if (existingUser) {
      // Usuário já existe
      return res.status(409).json({ error: 'Usuário já cadastrado.' });
    } else {
      await user.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return res.status(201).json({ success: 'Usuário cadastrado com sucesso.' });
    }
  } catch (error) {
    // Ocorreu um erro durante o processo de criação do usuário
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Ocorreu um erro ao criar o usuário.' });
  }
});

app.get('/login', async (req, res) => {
  try {
    const { email, password } = req.query;

    // Verificar se o email e a senha foram fornecidos
    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    const query = `SELECT id, name, email FROM users WHERE email = '${email}' AND password = '${password}'`;
    const [results, metadata] = await sequelize.query(query);

    if (results.length > 0) {
      // Usuário encontrado
      const user = results[0];
      return res.json({ success: 'Usuário encontrado.', user });
    } else {
      // Usuário não encontrado
      return res.json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return res.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário.' });
  }
});

app.get('/listBarbearia', async(req, res)=>{
    try {
        // Realizar a consulta ao banco de dados para obter os registros desejados
        const users = await barbearia.findAll();
    
        // Retornar os registros encontrados como resposta
        return res.json(users);
      } catch (error) {
        console.error('Erro ao obter os registros:', error);
        return res.status(500).json({ error: 'Ocorreu um erro ao obter os registros.' });
      }
});

// Rota para cadastrar o horário no banco de dados
app.post('/agendarHorario', async (req, res) => {
  try {
    const existingHorario = await horario.findOne({
      where: {horario: req.body.horario,
              barbeariaId:req.body.barbearia_id}
    });
    if(existingHorario){
      //Horário já cadastrado
      return res.status(409).json({ error: 'Horário já agendado.' });
    }else{
      await horario.create({
        horario:req.body.horario,
        barbeariaId:req.body.barbearia_id,
        cretatedAt: new Date(),
        updated: new Date() });
    }
    return res.status(201).json({ success: 'Horário agendado com sucesso.' });
  }catch (error) {
    // Ocorreu um erro durante o processo de criação do usuário
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Ocorreu um erro ao criar o usuário.' });
    
  }
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) =>  {
    console.log('servidor rodando');
});