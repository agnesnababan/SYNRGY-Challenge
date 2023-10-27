const http = require('http');
const fs = require ('fs');
const path = require('path');

const {PORT = 8000} =process.env;

const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

const getContent=(filename)=>{
    const filePath = path.join(PUBLIC_DIRECTORY, filename);
    return fs.readFileSync(filePath);
}

// Function logic server
const server =(req, res) =>{
    const { url } = req;

    const isJs=url.includes('/script');
    const isImage=url.includes('/images');
    const isCss=url.includes('/css');

    if (url === '/'){
        res.end(getContent('index.html'));
    }else if (url === '/search'){
        res.end(getContent('search.html'));
    }else if (isJs || isCss || isImage){
        res.end(getContent(url))
    }else{
        res.end('Page Not Found')
    }
}

// running server
http.createServer(server).listen(PORT, '0.0.0.0', () => {
    console.log('Server is running, open http://Localhost:%d', PORT)
});