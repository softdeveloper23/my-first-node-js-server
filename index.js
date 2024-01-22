const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', ((req, res) => {
    if (req.url === '/brannon') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            name: 'Brannon Garrett',
            message: 'You are doing great!',
        }));
    } else if (req.url === '/messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li><h1>Hello Brannon!</h1></li>');
        res.write('<li><h2>How is the course going?</h2></li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
}));

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});