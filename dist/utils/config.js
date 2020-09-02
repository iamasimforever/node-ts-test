"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv = require('dotenv').config();
var jsonwebtoken_1 = require("jsonwebtoken");
var generateJWT = function (data) {
    return jsonwebtoken_1.sign({ data: data }, process.env.JWT, {
        expiresIn: '5d',
    });
};
var config = {
    port: process.env.PORT,
    db: process.env.DB,
    jwtSecret: process.env.JWT,
    generateJWT: generateJWT,
};
exports.config = config;
