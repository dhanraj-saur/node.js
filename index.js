const http = require('http')


function dataControl(req, res)
{
    res.write("<h1>Hello,This is Dhananjay srivastava</h1>")
    res.end()
}

http.createServer(dataControl).listen(4500)

// http.createServer((req, res)=>{
//     res.write("<h1>This is Dhananjay srivastava</h1>")
//     res.end()
// }).listen(4500) 