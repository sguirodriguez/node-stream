import http from 'node:http'
import { bufferToJsonMiddleware } from './middleware/buffer-to-Json.js';

const users = [];

const server = http.createServer(async (req, res) =>{
    const { method, url } = req;

    await bufferToJsonMiddleware(req, res)

    if(method === 'GET' && url === '/users'){
        return res.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){
        users.push({
            name: req.body.name,
            email: req.body.email
        })

        return res.writeHead(210).end();
    }

    return res.writeHead(404).end();
})

server.listen(3333)