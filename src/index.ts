import express from 'express'
import ListaFilme from './aplicacao/lista-filme.use-case'
import BancoMongoDB from './infra/banco/banco-mongodb'
import SalvaFilme from './aplicacao/salva-filme.use-case'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
const bancoMongoDB = new BancoMongoDB
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
let filmesCadastros:Filme[] = []

app.post('/filmes',async(req,res)=>{
    
    const salvaFilme = new SalvaFilme(bancoMongoDB);
    // const {id,titulo,descricao,imagem} = req.body
    const filme = await salvaFilme.execute(req.body);
    // const filme = {
    //     id,
    //     titulo,
    //     descricao,
    //     imagem
    // }
    filmesCadastros.push(filme)
    res.status(201).send(filme)
})
app.get('/filmes',async(req,res)=>{
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