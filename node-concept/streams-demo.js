// streams is also object that help to read data from file and write 

// four type of stream 
// 1. readable  -> use for read 
//2. writable  --> write to a file
//duplex  --> can be used for both read and write (TCP socket)
// transform  -> zlib steams  

const fs = require('fs')
const zlib = require('zlib')   // compression similar to gzip
const crypto = require('crypto')
const {Transform} = require('stream')



class EncryptStream extends Transform{
    constructor(key, vector){
        super()
        this.key = key 
        this.vector = vector 

    }

    _transform(chunk , encoding , callback){
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key , this .vector)
        const encrypted = Buffer.concat([cipher.update(chunk),cipher.final()])   // encyprted the data yu are giving
        this.push(encrypted)
        callback()
    }
}


const key = crypto.randomBytes(32)
const vector = crypto.randomBytes(16)

const readbleStream = fs.createReadStream('input.txt')


// new gzip object to compress the stream of the data

const gzipStream = zlib.createGzip()


const encryptStreams = new EncryptStream(key,vector)


const writableStream = fs.createWriteStream('output.txt.gz.enc')


// read - compress --> encyrpt  -->  write 

readbleStream.pipe(gzipStream).pipe(encryptStreams).pipe(writableStream)

console.log("Streaming -> compressing -> writing data");