const tracer = require('dd-trace').init();


console.log('Loading the Calc function');


exports.handler = function(event, context, callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    if (event.a === undefined || event.b === undefined || event.op === undefined) {
        callback("400 Invalid Input");
    }
    
    var res = {};
    res.a = Number(event.a);
    res.b = Number(event.b);
    res.op = event.op;
    
    if (isNaN(event.a) || isNaN(event.b)) {
        callback("400 Invalid Operand");
    }

    switch(event.op)
    {
        case "+":
        case "add":
            res.c = res.a + res.b;
            break;
        case "-":
        case "sub":
            res.c = res.a - res.b;
            break;
        case "*":
        case "mul":
            res.c = res.a * res.b;
            break;
        case "/":
        case "div":
            res.c = res.b===0 ? NaN : Number(event.a) / Number(event.b);
            break;
        default:
            callback("400 Invalid Operator");
            break;
    }
    callback(null, res);
};

// Add code to listen on port 3000
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/', function(req, res) {
    exports.handler(req.body, null, function(err, result) {
        if (err) {
            res.status(400).send(err);
                 } else {
                     res.json(result);
                        }
    });
 });

const server = app.listen(PORT, function() {
   console.log(`Server is running on port ${PORT}`);
});

// Handle termination signals
process.on('SIGINT', function() {
    console.log('Received SIGINT. Closing server...');
    server.close(function() {
        console.log('Server closed.');
        process.exit(0);
    });
});

















