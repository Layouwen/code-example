import { parse } from './parse'
import * as net from 'net'
import * as fs from 'fs'
import path from 'path'

// const package1 = (str: string): Buffer => {
//   const buf = Buffer.from(str)
//   let newBuf = Buffer.concat([Buffer.from([0x0b]), buf, Buffer.from([0x1c, 0x0d])], buf.length + 3)
//   return newBuf
// }

// var client = new net.Socket()
// client.connect(8009, '127.0.0.1', function () {
//   const content = fs.readFileSync(path.resolve(__dirname, './resFakeData'), 'utf-8')
//   client.write(package1(content))
// })

// client.on('close', function () {
//   console.log('Connection closed')
// })

const A01Path = path.resolve(__dirname, 'mock/ADT^A01^ADT_A01')

const dirs = fs.readdirSync(A01Path)
dirs.forEach(filename => {
  const data = parse(fs.readFileSync(path.resolve(A01Path, filename), 'utf-8'))
  console.log('====================================')
  console.log(data)
  console.log('====================================')
})
