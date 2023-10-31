import { describe, expect, it, test} from "vitest";
import BancoEmMemoria from "./banco-em-memoria";

describe('BancoEmMemoria', () => {
    test('deve salvar um filme em memória', async () => {
        const filme = {
            id:1,
            titulo:'Filme1',
            descricao:'Descrição do filme 1',
            imagem:"imagem.jpg"
        }

        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.salvar(filme)

        expect(bancoEmMemoria.filmes).toEqual([filme])
        expect(bancoEmMemoria.filmes.length).toBe(1)
    })
    test('deve listar os filmes salvos em memória', async() => {
        const filme = {
            id:1,
            titulo:'Filme1',
            descricao:'Descrição do filme 1',
            imagem:"imagem.jpg"
        }

        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.filmes.push(filme)
        const resultado = await bancoEmMemoria.listar()

        expect(resultado).toEqual([filme])
    })
    test('deve buscar um filme pelo id', async () => {
        const filme1 = {
            id:1,
            titulo:'Filme1',
            descricao:'Descrição do filme 1',
            imagem:"imagem.jpg"
        }

        const filme2 = {
            id:2,
            titulo:'Filme2',
            descricao:'Descrição do filme 2',
            imagem:"imagem.jpg"
        }

        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.filmes.push(filme1)
        bancoEmMemoria.filmes.push(filme2)
        const resultado = await bancoEmMemoria.buscarPorId(1)

        expect(resultado).toEqual(filme1)
        expect(bancoEmMemoria.filmes).toHaveLength(2)
    })
})