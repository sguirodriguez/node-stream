import http from 'node:http'

const server = http.createServer(async (req, res) =>{
    console.log("rodando server!")
    const buffers = [];


    for await (const chunk of req){
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString();

    console.log('content', fullStreamContent)

   return res.end(fullStreamContent)
})

server.listen(3333)