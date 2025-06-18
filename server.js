import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import User from './models/User.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())


app.get('/users', async (request, response) => {
   const users = await User.find()

   return response.status(200).json(users); // se vier o status 200 lista os usuários
})


app.post('/users', async (request, response) => {
   const user = request.body
   const newUser = await User.create(user)
   
   return response.status(201).json(newUser) // se vier o status 201(para criação) deu certo

})

mongoose
   .connect(
      'mongodb+srv://victorribeirobaradel:aTCD8isHhMXgsB0r@usersaprendendocrud.rnfnpyd.mongodb.net/?retryWrites=true&w=majority&appName=UsersAprendendoCRUD'
   )
   .then(() => console.log('Banco de dados conectado'))
   .catch((err) => console.error('Erro ao conectar ao MongoDB:', err))

app.listen(PORT)