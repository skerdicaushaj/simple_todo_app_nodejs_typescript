"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function isApiKeyAllowed(req, res, next) {
    const apiKeyFromEnv = process.env.API_KEY;
    const apiKeyFromHeader = req.headers['x-api-key'];
    console.log(apiKeyFromEnv);
    console.log(apiKeyFromHeader);
    if (!apiKeyFromEnv || !apiKeyFromHeader || apiKeyFromHeader !== apiKeyFromEnv) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    next();
}
exports.default = isApiKeyAllowed;
