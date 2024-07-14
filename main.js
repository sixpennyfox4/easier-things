const http = require('http')
const fs = require('fs');
const path = require('path');

let port;
let htmlFile;
let folder;
let mode;

const fileSet = fs.readFileSync(path.join(__dirname, '.settings.json'), 'utf-8');
const settingsJson = JSON.parse(fileSet);

const filej = fs.readFileSync(path.join(__dirname, settingsJson.defConfFile), 'utf-8');
const langJson = JSON.parse(filej);

if (langJson.hasOwnProperty('LiveS')) {
    if (langJson.LiveS.hasOwnProperty('mode')) {
        if (typeof langJson.LiveS.mode === 'string') {
            mode = langJson.LiveS.mode;
    
            if (mode === 'singleFile') {
                mdSingle();
            } else if (mode === 'singleFolder') {
                mdFolder();
            } else {
                console.log('ERROR: Please chose a mode (singleFile, singleFolder)!');
            }
        } else {
            console.log('ERROR: Please chose a mode (singleFile, singleFolder)!');
        }
    } else {
        console.log('ERROR: Please specify a mode with "mode": !');
    }
} else {
    null;
}

function mdFolder() {
    if (langJson.hasOwnProperty('LiveS')) {
        if (langJson.LiveS.hasOwnProperty('htmlF')) {
            console.log('ERROR: Please remove htmlF!');
        } else {
            if (langJson.LiveS.hasOwnProperty('folder')) {
                if (typeof langJson.LiveS.folder === 'string') {
                    if (langJson.LiveS.folder === 'cFolder') {
                        folder = __dirname;
                    } else {
                        folder = langJson.LiveS.folder;
                    };
    
                    if (langJson.LiveS.hasOwnProperty('port')) {
                        if (typeof langJson.LiveS.port === 'number' && Number.isInteger(langJson.LiveS.port)) {
                            port = langJson.LiveS.port;
            
                            if (langJson.LiveS.hasOwnProperty('run')) {
                                if (typeof langJson.LiveS.run === 'boolean') {
                                    if (langJson.LiveS.run === true) {
                                        startF();
                                        printStat2();
                                    } else if (langJson.LiveS.run === false) {
                                        console.log('Run is set to false, set it to true to run the server!');
                                    }
                                } else {
                                    console.log('ERROR: Please make sure run is set to true or false (if its false the code wont run, if its true the code will run)!');
                                }
                            } else {
                                console.log('ERROR: Please specify a value of run which is used to run the code!');
                            }
                        } else {
                            console.log('ERROR: Port should be an integer!');
                        }
                    } else {
                        console.log('ERROR: Please specify a port with "port": !');
                    }
                } else {
                    console.log('ERROR: Folder should be a string!');
                }
            } else {
                console.log('ERROR: Please specify a folder with "folder": !');
            }
        }
    }
}

function mdSingle() {
    if (langJson.hasOwnProperty('LiveS')) {
        if (langJson.LiveS.hasOwnProperty('folder')) {
            console.log('ERROR: Please remove folder!');
        } else {
            if (langJson.LiveS.hasOwnProperty('port')) {
                if (typeof langJson.LiveS.port === 'number' && Number.isInteger(langJson.LiveS.port)) {
                    port = langJson.LiveS.port;
    
                    if (langJson.LiveS.hasOwnProperty('htmlF')) {
                        if (typeof langJson.LiveS.htmlF === 'string') {
                            htmlFile = langJson.LiveS.htmlF;
    
                            if (langJson.LiveS.hasOwnProperty('run')) {
                                if (typeof langJson.LiveS.run === 'boolean') {
                                    if (langJson.LiveS.run === true) {
                                        startS(htmlFile);
                                        printStat1();
                                    } else if (langJson.LiveS.run === false) {
                                        console.log('Run is set to false, set it to true to run the server!');
                                    }
                                } else {
                                    console.log('ERROR: Please make sure run is set to true or false (if its false the code wont run, if its true the code will run)!');
                                }
                            } else {
                                console.log('ERROR: Please specify a value of run which is used to run the code!');
                            }
                        } else {
                            console.log('ERROR: htmlF should be a string!');
                        }
                    } else {
                        console.log('ERROR: Please specify a file with "htmlF": !');
                    }
                } else {
                    console.log('ERROR: Port should be a number!');
                }
            } else {
                console.log('ERROR: Please specify a port with "port": !');
            }
        }
    }
}

function startF() {
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            fs.readdir(folder, (err, files) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Internal Server Error!');
                    return;
            }

                const htmlFiles = files.filter(file => path.extname(file) === '.html');
                
                if (htmlFiles.length === 0) {
                    res.write('<html><body><h1 style="text-align: center;">NO FILES FOUND!</h1></body></html>');
                } else {

                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<html><body><h1 style="text-align: center;">Files:</h1><hr><br></body></html>');

                res.write('<ul>');
                htmlFiles.forEach(file => {
                    res.write(`<li><a style="position: relative; font-size: xx-large;" href="/${file}">${file}</a></li>`);
                });
                res.write('</ul></body></html>');
            }

                res.end();

            });
        } else {
            const requestedFile = req.url.substring(1);
            const filePath = path.join(folder, requestedFile);

            fs.stat(filePath, (err, stats) => {
                if (err || !stats.isFile() || path.extname(filePath) !== '.html') {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.end('404 Not Found!');
                } else {
                    fs.readFile(filePath, (err, content) => {
                        if (err) {
                            res.writeHead(500, {'Content-Type': 'text/plain'});
                            res.end('Internal Server Error!')
                        } else {
                            res.writeHead(200, {'Content-Type': 'text/html'});
                            res.end(content, 'utf-8');
                        }
                    });
                };
            });
        };
    });

    server.listen(port, () => {
        console.log(`Server started at http://localhost:${port}/`);
    });
}

function printStat1() {
    console.log(`mode: ${mode}`);
    console.log(`port: ${port}`);
    console.log(`file: ${htmlFile}`);
}

function printStat2() {
    console.log(`mode: ${mode}`);
    console.log(`port: ${port}`);
    console.log(`folder: ${folder}`);
}

function startS(f1) {
    const server = http.createServer((req, res) => {

        const filePath = path.join(__dirname, f1);

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal server error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content, 'utf-8');
            }
        });
    });

    server.listen(port, () => {
        console.log(`Server running at: http://localhost:${port}/`)
    })
};