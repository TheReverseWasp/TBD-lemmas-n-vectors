
var fs = require('fs')
    , http = require('http')
    , socketio = require('socket.io');
var natural = require('natural'),
        stemmer = natural.PorterStemmerEs;

    stemmer.attach();

var mul_stm = require('multilingual-stemmer')

// Create a stemmer for the english language
const stemmer2 = new mul_stm.Stemmer(mul_stm.Languages.Spanish);

var myVar='';
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(8080, function() {
    console.log('Listening at: http://localhost:8080');
});

socketio.listen(server).on('connection', function (socket) {

	//recieve client data
    socket.on('client_data', function(data){
       // process.stdout.write(data.letter);
		myVar=data.letter;
		myVar=myVar.toString('utf8');
    var temp = myVar.split(/[\s,]+/);
    myVar = myVar.tokenizeAndStem() + " ||||| ";
    //console.log(temp.lenth)
    for (var i = 0; i < temp.length; ++i) {
      myVar += stemmer2.stem(temp[i]) + " ";
    }
    });



   //send data to client
    setInterval(function(){
        socket.emit('message', {'message':myVar});
    }, 1000);


});
