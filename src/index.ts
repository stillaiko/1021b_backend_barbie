import express from 'express'
import ListaFilme from './aplicacao/lista-filme.use-case'
import BancoMongoDB from './infra/banco/banco-mongodb'

const app = express()
app.use(express.json())

type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
let filmesCadastros:Filme[] = []

app.post('/filmes',(req,res)=>{
    const {id,titulo,descricao,imagem} = req.body
    const filme = {
        id,
        titulo,
        descricao,
        imagem
    }
    filmesCadastros.push(filme)
    res.status(201).send(filme)
})
app.get('/filmes',async(req,res)=>{
    const bancoMongoDB = new BancoMongoDB
    const listaFilme = new ListaFilme(bancoMongoDB);
    const filmes = await listaFilme.executar();
    res.send(filmes)
})

app.get('/filmes/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const filme = filmesCadastros.find(filme=>filme.id === id)
    if(!filme) return res.status(404).send("Filme não encontrado")
    res.status(200).send(filme)
})

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})

export default app