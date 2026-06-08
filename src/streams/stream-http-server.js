import http from 'node:http'
import { InverseNumberStream } from './streams/fundamentals.js'

const server = http.createServer((req, res) =>{
    console.log("rodando server!")
    return req.pipe(new InverseNumberStream()).pipe(res)
})

server.listen(3333)