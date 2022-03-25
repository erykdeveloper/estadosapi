const {states} = require('./data')
const express = require('express')
const res = require('express/lib/response')
const { get } = require('express/lib/response')
const app = express()

app.use(express.json())

app.get('/estados',(req, res)=> {
    const newState = []
    states.map(({id,population,uf})=>{
        newState.push({id,population,uf})
    })
    res.json(newState)
})  

app.get('/populacao/:uf',(req, res)=> {
    const {uf} = req.params
    const state = states.find((state)=> state.uf===uf.toUpperCase())
    if(state) {
        //delete state.name
        return res.json({
            id:state.id,
            population:state.population,
            uf:state.uf
        })
    }
    res.json({error:'estado não encontrado'})
})

app.get('/populacao',(req, res)=> {
    res.json({estados:states})
})

app.listen(5000)