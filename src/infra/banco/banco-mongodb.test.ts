import {describe, expect,test} from "vitest";
import {BancoMongoDB} from './banco-mongodb'

describe('BancoMongoDB test', ()=>{

test('BancoMongoDB', ()=>{
const bancoMongoDB = new BancoMongoDB()
expect(bancoMongoDB).toBeDefined()
})

test('deve salvar um filme', ()=>{
const bancoMongoDB = new BancoMongoDB()
const filme = {
    id:1,
    titulo:"",
    descricao:"",
    imagem:""
}
})

})
