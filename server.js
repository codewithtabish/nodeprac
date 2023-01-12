const http =require('http')
console.log('This is the server cls');
http.createServer((req,resp)=>{
    resp.write('<h1>This is me the server ....</h1>')
    resp.write('<h1>This is me the server again ....</h1>')
    resp.write('<h2>This is me the server again h2 ....</h2>')
    resp.write('<p>This is me the server again ....</p>')

    // resp.end()

}).listen(3000);