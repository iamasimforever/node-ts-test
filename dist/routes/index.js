"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = __importStar(require("express"));
var router = express.Router();
exports.router = router;
router.post('/v1/parse', function (req, res) {
    var data = req.body.data;
    res.json({
        statusCode: 200,
        result: parseV1(data),
    });
});
router.post('/v2/parse', function (req, res) {
    var data = req.body.data;
    res.json({
        statusCode: 200,
        result: parseV2(data),
    });
});
var parseV1 = function (data) {
    return {
        firstName: 'TEST0000',
        lastName: 'USER000',
        clientId: '9994567',
    };
};
var parseV2 = function (data) {
    return {
        firstName: 'TEST',
        lastName: 'USER',
        clientId: '999-4567',
    };
};
