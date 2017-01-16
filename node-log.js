'use strict';
const fs = require("fs");

class Log {
    setPath(path) {
        this.path = `${__dirname}/${path}` ;
        if (!fs.existsSync(this.path)){
            fs.mkdirSync(this.path);
        }
    }
    write(file, log){
        if(!this.path) throw 'Err: Path not defined';
        console.log(this.path);
        console.log(`[${ new Date() }] - ${log}`);
    }
}

let log = new Log();

log.setPath('teste');
log.write('file.txt', 'Teste');