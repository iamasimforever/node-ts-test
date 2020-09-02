"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = require("body-parser");
var routes_1 = require("./routes");
var app = express_1.default();
app.use(body_parser_1.json());
app.use(cors_1.default());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use('/api', routes_1.router);
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log("Listening to port " + port);
});
server.on('error', console.error);
