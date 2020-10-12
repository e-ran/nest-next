"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInternalUrlPrefix = exports.isInternalUrl = void 0;
const path_1 = __importDefault(require("path"));
const internalPrefixes = [/^\/_next\//, /^\/static\//];
function isInternalUrl(url) {
    for (const prefix of internalPrefixes) {
        if (prefix.test(url)) {
            return true;
        }
    }
    return false;
}
exports.isInternalUrl = isInternalUrl;
let lastPrefix = '';
function setInternalUrlPrefix(prefix) {
    if (lastPrefix === prefix) {
        return;
    }
    lastPrefix = prefix;
    internalPrefixes[0] = new RegExp('^' + path_1.default.join(prefix, '/_next/'));
    internalPrefixes[1] = new RegExp('^' + path_1.default.join(prefix, '/static/'));
}
exports.setInternalUrlPrefix = setInternalUrlPrefix;
