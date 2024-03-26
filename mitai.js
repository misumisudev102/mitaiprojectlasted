const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("./fca-disme");
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;
const fs = require("fs");
const crypto = require("crypto");
const aes = require("aes-js");
const { spawn } = require('child_process');
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const chalk = require("chalk");
const getIP = require('ipware')().get_ip;
const requestIp = require('request-ip');
const PORT = process.env.PORT || 8300;

function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
};
const logMitai = console.log;

global.client = {
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: [],
    handleSchedule: [],
    handleReaction: [],
    handleReply: [],
    mainPath: process.cwd(),
    configPath: ""
};

global.data = {
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: [],
    allUserID: [],
    allCurrenciesID: [],
    allThreadID: []
};

global.utils = require("./utils");
global.nodemodule = {};
global.config = {};
global.configModule = {};
global.moduleData = [];
global.language = {};
global.account = {};

function servertime() {
    const child = spawn("node", ["./mitaiMain/mitai_main.js"], {
        cwd: __dirname,
        stdio: "inherit",
    });

}
servertime();

const app = express();

app.get('/', function (req, res) {
    const api = require("./scr_api/routes/api");
    app.set("json spaces", 4);
    app.use(requestIp.mw());
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(api);
    const appDirectory = path.resolve(__dirname);

    let indexHTML = "";
    try {
        indexHTML = fs.readFileSync(path.join(appDirectory, 'index.html')).toString();
    } catch (e) {
        process.exit(1);
    }

    res.send(indexHTML);
});

let ipRequestCount = {};
let deviceCount = 0;
let requestCount = 0;
logMitai(
    chalk.bold.hex(randomColor()).bold(`[ ANTI - DDOS ] »`),
    chalk.bold.hex(randomColor()).bold(`Khởi động thành công chế độ chống ddos`));

app.use('/', function (req, res, next) {
    const ipInfo = getIP(req);
    const clientIp = ipInfo.clientIp;
    if (ipRequestCount[clientIp]) {
        ipRequestCount[clientIp]++;
    } else {
        ipRequestCount[clientIp] = 1;
    }

    const uniqueIps = Object.keys(ipRequestCount).length;
    if (uniqueIps > 500) {
        logMitai(
            chalk.bold.hex(randomColor()).bold(`[ ANTI - DDOS ] »`),
            chalk.bold.hex(randomColor()).bold(`Phát hiện ddos tiến hành tắt server`));
        process.exit(0);
    }
    if (ipRequestCount[clientIp] === 1) {
        deviceCount++;
    }
    if (deviceCount > 100) {
        logMitai(
            chalk.bold.hex(randomColor()).bold(`[ ANTI - DDOS ] »`),
            chalk.bold.hex(randomColor()).bold(`Phát hiện ddos tiến hành tắt server`));
        process.exit(0);
    }
    requestCount++;
    if (requestCount > 500) {
        logMitai(
            chalk.bold.hex(randomColor()).bold(`[ ANTI - DDOS ] »`),
            chalk.bold.hex(randomColor()).bold(`Phát hiện ddos tiến hành tắt server`));
        process.exit(0);
    }

    setTimeout(() => {
        ipRequestCount = {};
        deviceCount = 0;
        requestCount = 0;
    }, 0, 1);

    logMitai(
        chalk.bold.hex(randomColor()).bold(`[ STATUS ] »`),
        chalk.bold.hex(randomColor()).bold(`Có IP`),
        chalk.bold.hex(randomColor()).bold(`${clientIp}`),
        chalk.bold.hex(randomColor()).bold(`đã truy cập api:`),
        chalk.bold.hex(randomColor()).bold(`${decodeURIComponent(req.originalUrl)}`)
    );
    next()
});

app.listen(PORT, () => {
    logMitai(chalk.bold.hex(randomColor()).bold(`[ SERVER-API ] → Tải thành công server api`));
});

const config = {
    status: true,
    name: 'Mitai Project',
    timestamp: Date.now()
};
async function encryptState(data, key) {
    var key = ['mitaiproject', 'nguyenductai']
    let hashEngine = crypto.createHash('sha256'),
        hashKey = hashEngine.update(key).digest()
    let bytes = aes.utils.utf8.toBytes(data)
    let aesCtr = new aes.ModeOfOperation.ctr(hashKey),
        encryptedData = aesCtr.encrypt(bytes)
    return aes.utils.hex.fromBytes(encryptedData)
}

function decryptState(data, key) {
    let hashEngine = crypto.createHash('sha256'),
        hashKey = hashEngine.update(key).digest(),
        encryptedBytes = aes.utils.hex.toBytes(data),
        aesCtr = new aes.ModeOfOperation.ctr(hashKey),
        decryptedData = aesCtr.decrypt(encryptedBytes)
    return aes.utils.utf8.fromBytes(decryptedData)
}

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Đang tiến hành tải config.json");
} catch {
    if (existsSync(global.client.configPath.replace(/\.json/g, "") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g, "") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Không tìm thấy: ${global.client.configPath.replace(/\.json/g, "") + ".temp"}`);
    } else logger.loader("Không tìm thấy config cho soucre!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Đã tải thành công coing config cho soucre!");
} catch { logger.loader("Không thể tải config cho soucre!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');


/////////////////////////////////////////
//========= Tải ngôn ngữ file =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}

try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || 'appstate.json')),
        appState = process.env.KEY && fs.readFileSync(appStateFile, 'utf8')[0] != '[' && global.config.encryptSt ? JSON.parse(decryptState(fs.readFileSync(appStateFile, 'utf8'), process.env.KEY)) : require(appStateFile)
    logger.loader(global.getText('mitai', 'foundPathAppstate'))
} catch {
    logger.loader(global.getText('mitai', 'notFoundPathAppstate'), 'error')
}

////////////////////////////////////////////////////////////
//======Đăng nhập tài khoản bot và tải modules event======//
////////////////////////////////////////////////////////////

function onBot({ models }) {
    const loginData = {};
    loginData['appState'] = appState;
    login(loginData, async (loginError, loginApiData) => {
        if (loginError) return logger(JSON.stringify(loginError), `ERROR`);
        loginApiData.setOptions(global.config.FCAOption)
        let loginState = loginApiData.getAppState()
        loginState = JSON.stringify(loginState, null, '\t')
        if (process.env.KEY && global.config.encryptSt) {
            loginState = await encryptState(loginState, process.env.KEY)
            writeFileSync(appStateFile, loginState)
        } else {
            writeFileSync(appStateFile, loginState)
        }

        ///////////////////////////////////////////////                  ========= Tự động Kết nối adm =========
        ////////////////////////////////////////////////
        logger.loader('Đang tiến hành kết nối đến Admin chính');
        logger.loader('Kết nối thành công với Admin chính');
        logger.loader('Id Admin chính là: ' + global.config.ADMC[0])
        global.config.version = '1.2.15'
        global.client.timeStart = new Date().getTime(),
            function () {
                const listCommand = readdirSync(global.client.mainPath + '/modules/commands').filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));
                for (const command of listCommand) {
                    try {
                        var module = require(global.client.mainPath + '/modules/commands/' + command);
                        if (!module.config || !module.run || !module.config.commandCategory) throw new Error(global.getText('mitai', 'errorFormat'));
                        if (global.client.commands.has(module.config.name || '')) throw new Error(global.getText('mitai', 'nameExist'));
                        if (!module.languages || typeof module.languages != 'object' || Object.keys(module.languages).length == 0)
                            //logger.loader(global.getText('mirai', 'notFoundLanguage', module.config.name), 'warn');
                            if (module.config.dependencies && typeof module.config.dependencies == 'object') {
                                for (const reqDependencies in module.config.dependencies) {
                                    const reqDependenciesPath = join(__dirname, 'nodemodules', 'node_modules', reqDependencies);
                                    try {
                                        if (!global.nodemodule.hasOwnProperty(reqDependencies)) {
                                            if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global.nodemodule[reqDependencies] = require(reqDependencies);
                                            else global.nodemodule[reqDependencies] = require(reqDependenciesPath);
                                        } else '';
                                    } catch {
                                        var check = false;
                                        var isError;
                                        logger.loader(global.getText('mitai', 'notFoundPackage', reqDependencies, module.config.name), 'warn');
                                        execSync('npm ---package-lock false --save install' + ' ' + reqDependencies + (module.config.dependencies[reqDependencies] == '*' || module.config.dependencies[reqDependencies] == '' ? '' : '@' + module.config.dependencies[reqDependencies]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                        for (let i = 1; i <= 3; i++) {
                                            try {
                                                require['cache'] = {};
                                                if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global['nodemodule'][reqDependencies] = require(reqDependencies);
                                                else global['nodemodule'][reqDependencies] = require(reqDependenciesPath);
                                                check = true;
                                                break;
                                            } catch (error) { isError = error; }
                                            if (check || !isError) break;
                                        }
                                        if (!check || isError) throw global.getText('mitai', 'cantInstallPackage', reqDependencies, module.config.name, isError);
                                    }
                                }
                                //logger.loader(global.getText('mirai', 'loadedPackage', module.config.name));
                            }
                        if (module.config.envConfig) try {
                            for (const envConfig in module.config.envConfig) {
                                if (typeof global.configModule[module.config.name] == 'undefined') global.configModule[module.config.name] = {};
                                if (typeof global.config[module.config.name] == 'undefined') global.config[module.config.name] = {};
                                if (typeof global.config[module.config.name][envConfig] !== 'undefined') global['configModule'][module.config.name][envConfig] = global.config[module.config.name][envConfig];
                                else global.configModule[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                                if (typeof global.config[module.config.name][envConfig] == 'undefined') global.config[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                            }


                            //logger.loader(global.getText('mirai', 'loadedConfig', module.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mitai', 'loadedConfig', module.config.name, JSON.stringify(error)));
                        }
                        if (module.onLoad) {
                            try {
                                const moduleData = {};
                                moduleData.api = loginApiData;
                                moduleData.models = models;
                                module.onLoad(moduleData);
                            } catch (_0x20fd5f) {
                                throw new Error(global.getText('mitai', 'cantOnload', module.config.name, JSON.stringify(_0x20fd5f)), 'error');
                            };
                        }
                        if (module.handleEvent) global.client.eventRegistered.push(module.config.name);
                        global.client.commands.set(module.config.name, module);
                        //logger.loader(global.getText('mitai', 'successLoadModule', module.config.name));
                    } catch (error) {
                        //logger.loader(global.getText('mitai', 'failLoadModule', module.config.name, error), 'error');
                    };
                }
            }(),
            function () {
                const events = readdirSync(global.client.mainPath + '/modules/events').filter(event => event.endsWith('.js') && !global.config.eventDisabled.includes(event));
                for (const ev of events) {
                    try {
                        var event = require(global.client.mainPath + '/modules/events/' + ev);
                        if (!event.config || !event.run) throw new Error(global.getText('mitai', 'errorFormat'));
                        if (global.client.events.has(event.config.name) || '') throw new Error(global.getText('mitai', 'nameExist'));
                        if (event.config.dependencies && typeof event.config.dependencies == 'object') {
                            for (const dependency in event.config.dependencies) {
                                const _0x21abed = join(__dirname, 'nodemodules', 'node_modules', dependency);
                                try {
                                    if (!global.nodemodule.hasOwnProperty(dependency)) {
                                        if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                        else global.nodemodule[dependency] = require(_0x21abed);
                                    } else '';
                                } catch {
                                    let check = false;
                                    let isError;
                                    logger.loader(global.getText('mitai', 'notFoundPackage', dependency, event.config.name), 'warn');
                                    execSync('npm --package-lock false --save install' + dependency + (event.config.dependencies[dependency] == '*' || event.config.dependencies[dependency] == '' ? '' : '@' + event.config.dependencies[dependency]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                    for (let i = 1; i <= 3; i++) {
                                        try {
                                            require['cache'] = {};
                                            if (global.nodemodule.includes(dependency)) break;
                                            if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                            else global.nodemodule[dependency] = require(_0x21abed);
                                            check = true;
                                            break;
                                        } catch (error) { isError = error; }
                                        if (check || !isError) break;
                                    }
                                    if (!check || isError) throw global.getText('mitai', 'cantInstallPackage', dependency, event.config.name);
                                }
                            }
                            //logger.loader(global.getText('mitai', 'loadedPackage', event.config.name));
                        }
                        if (event.config.envConfig) try {
                            for (const _0x5beea0 in event.config.envConfig) {
                                if (typeof global.configModule[event.config.name] == 'undefined') global.configModule[event.config.name] = {};
                                if (typeof global.config[event.config.name] == 'undefined') global.config[event.config.name] = {};
                                if (typeof global.config[event.config.name][_0x5beea0] !== 'undefined') global.configModule[event.config.name][_0x5beea0] = global.config[event.config.name][_0x5beea0];
                                else global.configModule[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                                if (typeof global.config[event.config.name][_0x5beea0] == 'undefined') global.config[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                            }
                            //logger.loader(global.getText('mirai', 'loadedConfig', event.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mitai', 'loadedConfig', event.config.name, JSON.stringify(error)));
                        }
                        if (event.onLoad) try {
                            const eventData = {};
                            eventData.api = loginApiData, eventData.models = models;
                            event.onLoad(eventData);
                        } catch (error) {
                            throw new Error(global.getText('mitai', 'cantOnload', event.config.name, JSON.stringify(error)), 'error');
                        }
                        global.client.events.set(event.config.name, event);
                        //logger.loader(global.getText('mirai', 'successLoadModule', event.config.name));
                    } catch (error) {
                        logger.loader(global.getText('mitai', 'failLoadModule', event.config.name, error), 'error');
                    }
                }
            }()
        logger.loader(global.getText('mitai', 'finishLoadModule', global.client.commands.size, global.client.events.size))
        logger.loader('=== ' + (Date.now() - global.client.timeStart) + 'ms ===')

        writeFileSync(global.client['configPath'], JSON['stringify'](global.config, null, 4), 'utf8')
        unlinkSync(global['client']['configPath'] + '.temp');
        const listenerData = {};
        listenerData.api = loginApiData;
        listenerData.models = models;
        const listener = require('./includes/listen')(listenerData);

        function listenerCallback(error, message) {
            if (error) return logger(global.getText('mitai', 'handleListenError', JSON.stringify(error)), 'error');
            if (['presence', 'typ', 'read_receipt']['some'](data => data == message.type)) return;
            if (global.config.DeveloperMode == !![]) console.log(message);
            return listener(message);
        };
        global.handleListen = loginApiData.listenMqtt(listenerCallback);
        console.log('----LOADER NOTIFICATION SECURITI----')

        global.client.api = loginApiData

    });
}
//////////////////////////////////////////////
//===== Tải dữ liệu người dùng và nhóm =====//
//////////////////////////////////////////////

(async () => {
    try {
        logger.loader('Tiến hành tải dữ liệu cho người dùng và nhóm')
        await sequelize.authenticate();
        const authentication = {};
        authentication.Sequelize = Sequelize;
        authentication.sequelize = sequelize;
        const models = require('./includes/database/model')(authentication);
        logger(global.getText('mitai', 'successConnectDatabase'), '[ DATABASE ]');
        const botData = {};
        botData.models = models
        onBot(botData);
    } catch (error) {
        logger(global.getText('mirai', 'successConnectDatabase', JSON.stringify(error)), '[ DATA ] ');
    }
    logger('Không thể tải dữ liệu người dùng và nhóm', error)
})();
process.on('unhandledRejection', (err, p) => { })
    .on('uncaughtException', err => { console.log(err); });