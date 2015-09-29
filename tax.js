var http = require('http');

// require node's url module to parse the url's querystring
var url = require('url');

// create the server to run the page
http.createServer(function (req, res) {

    // get the querystring and parse the subtotal as a float value
    var qs = url.parse(req.url, true).query;
    var subTotal = parseFloat(qs.subtotal);

    // calculate tax and total
    var tax = subTotal * 0.13;
    var total = subTotal + tax;

    // output all the values
    res.write('<h1>Tax Calculator</h1>Sub Total: ' + subTotal + '<br />Tax: ' + tax + '<br />Total: ' + total);
    res.end();

}).listen(3000);
// JavaScript source code
