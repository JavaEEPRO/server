const http = require('http');
const port = 8080;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end(getFormattedDate() + " INFO Node.js server is started successfully");
};
const server = http.createServer(requestHandler);

const mimeTypes = {
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

server.listen(port, (err) => {
    if (err) {
        return console.log(getFormattedDate() + " WARNING error occurred", err);
    }
    console.log(getFormattedDate() + ` INFO server is listening on ${port} port`);
});

//
function getFormattedDate() {
    return new Date().toString().substring(0, 25);
}