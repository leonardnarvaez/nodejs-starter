"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 5555;
app.get('/', function (re, resp) {
    resp.send('Express + Typescript + MariaDB');
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
