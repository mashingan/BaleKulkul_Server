var http = require('http'),
    fs = require('fs'),
    qs = require('querystring'),
    calendar = require('./scripts/kalendar');

var PORT = 3000;

var server = http.createServer(function(req, res){
  //console.log(req.headers);
  res.setEncoding = 'utf8';
  if(req.method == 'GET' && req.url == '/'){
    serve(__dirname + '/index.html', 'text/html')
  } else if (req.method == 'GET' && req.url.substr(-3) == 'css'){
    serve(__dirname + '/' + req.url, 'text/css');
  } else if (req.method == 'GET' && req.url.substr(-2) == 'js'){
    serve(__dirname + '/' + req.url, 'text/javascript');
  } else if (req.method == 'POST' && req.url == '/date_property'){
    var body = '';
    req.on('data', function (chunk) {
      body += chunk;
    });
    var day = qs.parse(body).date;
    if(day) {
      day = day.match(calendar.PATTERN).reverse().join('-');
    } else {
      notFound();
    }
    console.log(day);

    try {
      var daytype = JSON.stringify(calendar.bali_calendar(day));
      req.on('end', function() {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Content-Length': daytype.length.toString()
        });
        res.end(daytype);
      });
    } catch (e) {
      console.log(e);
      notFound();
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
  function serve(path, type){
    res.writeHead(200, { 'Content-Type': type });
    fs.createReadStream(path).pipe(res);
  }
  function notFound() {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT);
