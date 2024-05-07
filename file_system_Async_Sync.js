const fileSystem = require('fs');

fileSystem.readFile('input.txt', (error, data) => {
    if (error) {
        return console.error(error);
    }
    
    console.log("--------------- Asynchronous ---------------");
    console.log("Asynchronous read:", data.toString());
});

console.log("--------------- Synchronous ---------------");
let data = fileSystem.readFileSync('input.txt');
console.log("Synchronous read:", data.toString());

console.log('Program Ended');

// Asynchronous - Opening File
fileSystem.open('input.txt', 'r+', function (error, fd) {
    if (error) {
        console.error(error);
    }
    
    console.log("--------------- Going to open file! ---------------");
    console.log("File opened successfully!");
});

fileSystem.stat('input.txt', function (error, stats) {
    if (error) {
        return console.log(error);
    }
    
    console.log("--------------- Going to get file info! ---------------");
    console.log(stats);
    console.log("Got file info successfully!");

    console.log("Is File?", stats.isFile());
    console.log("Is Directory?", stats.isDirectory());
});


console.log("--------------- Going to write into existing file ---------------");
fileSystem.writeFile('input3.txt', 'Simply Easy Learning!', function (error) {
    if (error) {
        return console.error(error);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fileSystem.readFile('input3.txt', function (error, data) {
        if (error) {
            return console.error(error);
        }

        console.log("Asynchronous read: ", data.toString());
    });
});

console.log("--------------- Going to open an existing file ---------------");
let buffer = new Buffer.alloc(1024);

fileSystem.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }

    console.log('File opened successfully!');
    console.log('Going to read the file');

    fileSystem.read(fd, buffer, 0, buffer.length, 0, function (error, bytes) {
        if (error) {
            console.error(error);
        }

        console.log(bytes, "bytes read");

        if (bytes > 0) {
            console.log(buffer.subarray(0, bytes).toString());
        }
    });
});

console.log("__filename: ", __filename);
console.log("__dirname: ", __dirname);

function printHello() {
    console.log("Hello world!");
}

// Now call above function after 2 seconds
let t = setTimeout(printHello, 2000);
clearTimeout(t);

let interval = setInterval(printHello, 2000);
clearInterval(interval);

console.log(process);