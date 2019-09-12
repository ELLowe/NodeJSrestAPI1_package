const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// You can use app.get('/blah', (req, res) => res.send('') to create routes,
//  as well as the traditional explicit app.route('/blah').get(function(req,res)){res.send("Message");} :

// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.use('/public', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.route('/starwars').get(function(req,res)
{
    res.send("Star Wars fans unite!");
});
app.route('/startrek').get(function(req,res)
{
    res.send("Star Trek Takeover!!!");
});

// app.route('/', function(req,res)
// {
//     res.send('Welcome to Node.JS discovery routes.');
// }));