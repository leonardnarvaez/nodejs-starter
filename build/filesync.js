"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonBlocking = exports.blocking = void 0;
var fs = __importStar(require("fs"));
// Blocking vs Non-Blocking
function blocking() {
    console.log('~~ before read sync');
    var data = fs.readFileSync("D:/text.txt");
    console.log('~~ after read sync', data.toString());
    console.log('~~ end');
}
exports.blocking = blocking;
function nonBlocking() {
    console.log('~~ before read async');
    fs.readFile("D:/text.txt", function (err, data) {
        if (err) {
            console.error('~~ error reading file', err);
            return;
        }
        console.log('~~ message.txt', data.toString());
    });
    console.log('~~ after read async');
    console.log('~~ end');
}
exports.nonBlocking = nonBlocking;
