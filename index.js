const fs = require('fs');
const { resolve } = require('path');
const path = require('path')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('folder created');
// })


// fs.rmdir(path.resolve(__dirname, 'dir'), (err) =>{
//     if(err){
//         throw err;
//     }
//     console.log('folder deleted');
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'hi there - ', (err) =>{
//     if(err){
//         throw err;
//     }
//     fs.appendFile(path(__dirname, 'test.txt'), 'last added', (err) =>{
//         if(err){
//             throw err;
//         }
//         console.log('file added');
//     })
// })

function writeFile(path, data){
    return new Promise((res, rej) => fs.writeFile(path, data, (err) => {
        if (err){
            return rej(err.message)
        }
        res()
    }))
}

function appendFile (path, data)  {
    return new Promise((res, rej) => fs.appendFile(path, data, (err) => {
        if (err){
            return rej(err.message)
        }
        res()
    }))
}

function readFileAs(path)  {
    return new Promise((res, rej) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err){
            return rej(err.message)
        }
        res(data)
    }))
}    

function ramoveFile(path)  {
    return new Promise((res, rej) => fs.rm(path, (err) => {
        if (err){
            return rej(err.message)
        }
        res()
    }))
}    

// ramoveFile(path.resolve(__dirname, 'test.txt'))
//     .then(()=> console.log('file deleted'))

// writeFile(path.resolve(__dirname, 'test.txt'), 'data')
//     .then(()=> appendFile(path.resolve(__dirname, 'test.txt'), '123'))
//     .then(()=> readFileAs(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

   
const text = process.env.TEXT || '';

writeFile(path.resolve(__dirname, 'test.txt'), text)
    .then(() => readFileAs(path.resolve(__dirname, 'test.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFile(path.resolve(__dirname, 'count.txt'), data))