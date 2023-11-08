"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validConfig = void 0;
const validConfig = (config) => {
    if ((config === null || config === void 0 ? void 0 : config.version) !== 'v1') {
        throw new Error('API only supports v1');
    }
    if (!(config === null || config === void 0 ? void 0 : config.host)) {
        throw new Error('API requires a host');
    }
    config.host = config.host.endsWith('/')
        ? config.host.slice(0, -1)
        : config.host;
    return config;
};
exports.validConfig = validConfig;
