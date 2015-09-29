//Advanced web programming - COMP2068    
//lab2 
//Mo Zou

var http = require('http');

// require node's url module to parse the url's querystring
var url = require('url');

// create the server to run the page
http.createServer(function (req, res) {

    // get the querystring and parse the subtotal as a float value
    var qs = url.parse(req.url, true).query;
    var X = parseFloat(qs.x);
    var Y = parseFloat(qs.y);
    var m = String(qs.method);

    

    if(m == 'add')
    {
        var result = X + Y;
        res.write('<h1>formula</h1>' + X + ' ' + '+' + ' ' + Y + ' = ' + result);
    }
    else if(m == 'subtract')
    {
        var result = X - Y;
        res.write('<h1>formula</h1>' + X + ' ' + '-' + ' ' + Y + ' = ' + result);
    }
    else if (m == 'multiply')
    {
        var result = X * Y;
        res.write('<h1>formula</h1>' + X + ' ' + '*' + ' ' + Y + ' = ' + result);
    }
    else if (m == 'divide')
    {
        var result = X / Y;
        res.write('<h1>formula</h1>' + X + ' ' + '/' + ' ' + Y + ' = ' + result);
    }
    

    // output result
   
    res.end();

}).listen(3000);

