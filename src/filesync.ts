import * as fs from 'fs';
// Blocking vs Non-Blocking
export function blocking() {
    console.log('~~ before read sync');
    const data = fs.readFileSync('D:/text.txt');
    console.log('~~ after read sync', data.toString());
    console.log('~~ end');
}

export function nonBlocking() {
    console.log('~~ before read async');
    fs.readFile('D:/text.txt', function (err, data) {
        if (err) {
            console.error('~~ error reading file', err);
            return;
        }
        console.log('~~ message.txt', data.toString());
    });
    console.log('~~ after read async');
    console.log('~~ end');
}
