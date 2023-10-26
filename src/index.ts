import express from 'express'
const app = express()
app.use(express.json())

app.post('/filmes',(req,res)=>{
    const filme = {
        id:1,
        titulo:'Vingadores',
        descricao:'Filme dos herois da marvel',
        imagem:"https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg"
    }
    res.status(201).send(filme)
})
app.get('/filmes',(req,res)=>{
    res.send("Filmes Listados com sucesso")
})

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})

export default app