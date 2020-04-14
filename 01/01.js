var http = require("http")


// 使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口
http.createServer(function(request,response){
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("hello world!\n")
}).listen(8888)