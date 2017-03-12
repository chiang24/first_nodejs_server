var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 6360;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看
switch(path){
	case '/':
	var htmlString = fs.readFileSync('./index.html')
	response.setHeader('Content-Type','text/html;charset=utf-8')
	response.end(htmlString)
	break
	default:
		response.end('404')
}

  // 代码结束，下面不要看
})

server.listen(port)
console.log('监听 6360 成功')
