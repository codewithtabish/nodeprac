const http = require('http');
console.log('This is is the server ....')
http.createServer((req,res)=>{
    res.write('<h1>This is the first data ...</h1>')
    res.write('<h2>This is the first data of the second ...</h2>')
    res.write('<h2>This is the first data of the second ...</h2>')
    res.write('<h2>This is the first data of the second ...</h2>')

}).listen(3000)