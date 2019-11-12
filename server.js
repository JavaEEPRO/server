const Koa = require("koa");
const port = 8080;
const server = new Koa();
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

server
    .use(ctx => {
        ctx.body = getFormattedDate() + " INFO koa server is started and running successfully";
    })
    .listen(port, (err) => {
        if (err) {
        return console.log(getFormattedDate() + " WARNING error occurred", err);
    }
    console.log(getFormattedDate() + ` INFO server is listening on ${port} port`);
    });

//
function getFormattedDate() {
    return new Date().toString().substring(0, 25);
}