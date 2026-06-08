// Streams -->
// process.stdin.pipe(process.stdout)

import { Readable, Transform, Writable } from "node:stream";

export class OneToHundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (i > 5) {
                return this.push(null);
            }
            
            const buff = Buffer.from(String(i))

            this.push(buff)
        }, 1000)
    }
}

export class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1;
        console.log('transformed-->', transformed)
        callback(null, Buffer.from(String(transformed)));
    }
}

export class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}


//new OneToHundredStream()
//.pipe(new InverseNumberStream())
//.pipe(new MultiplyByTenStream())
