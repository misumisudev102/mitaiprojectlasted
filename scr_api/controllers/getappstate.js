const { errorHandler } = require("../utils");
const deviceID = require('uuid');
const adid = require('uuid');
const totp = require("totp-generator");
const axios = require("axios");

exports.getappstate = async (req, res, next) => {
    var { username, password, twofactor = '0' , _2fa } = req.query;
    //EAAClA:   181425161904154|95a15d22a0e735b2983ecb9759dbaf91
    //EAAAAU:   350685531728|62f8ce9f74b12f84c123cc23437a4a32
    //EAADo1:   256002347743983|374e60f8b9bb6b8cbb30f78030438895
    //EAAGO:    438142079694454|fc0a7caa49b192f64f6f5a6d9643bb28
    //EAAAAAY:  6628568379|c1e620fa708a1d5696fb991c1bde5662
    //EAAVB:    1479723375646806|afb3e4a6d8b868314cc843c21eebc6ae
    //EAAC2S:   200424423651082|2a9918c6bcd75b94cefcbb5635c6ad16
    //EAATK:    1348564698517390|007c0a9101b9e1c8ffab727666805038
    //EAAQr:    1174099472704185|0722a7d5b5a4ac06b11450f7114eb2e9
    //EAAI7:    628551730674460|b9693d3e013cfb23ec2c772783d14ce8
    //EAAD6V7:  https://api.facebook.com/method/auth.getSessionforApp?format=json&access_token={token}&new_app_id=275254692598279
    //thay vào access_token bên dưới để ra dạng token tương ứng 
    if (!username || !password) return res.json({
        status: false,
        message: 'Vui lòng nhập đủ thông tin!'
    });
    try {
        var form = {
            adid: adid.v4(),
            email: username,
            password: password,
            format: 'json',
            device_id: deviceID.v4(),
            cpl: 'true',
            family_device_id: deviceID.v4(),
            locale: 'en_US',
            client_country_code: 'US',
            credentials_type: 'device_based_login_password',
            generate_session_cookies: '1',
            generate_analytics_claim: '1',
            generate_machine_id: '1',
            currently_logged_in_userid: '0',
            irisSeqID: 1,
            try_num: "1",
            enroll_misauth: "false",
            meta_inf_fbmeta: "NO_FILE",
            source: 'login',
            machine_id: randomString(24),
            meta_inf_fbmeta: '',
            fb_api_req_friendly_name: 'authenticate',
            fb_api_caller_class: 'com.facebook.account.login.protocol.Fb4aAuthHandler',
            api_key: '882a8490361da98702bf97a021ddc14d',
            access_token: '350685531728%7C62f8ce9f74b12f84c123cc23437a4a32'
        }
        form.sig = encodesig(sort(form))
        var options = {
            url: 'https://b-graph.facebook.com/auth/login',
            method: 'post',
            data: form,
            transformRequest: [
                (data, headers) => {
                    return require('querystring').stringify(data)
                },
            ],
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                "x-fb-friendly-name": form["fb_api_req_friendly_name"],
                'x-fb-http-engine': 'Liger',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            }
        }
        return new Promise((resolve) => {
            axios.request(options).then(async(response) => {
                try {
                    response.data.access_token_eaad6v7 = await convertToken(response.data.access_token)
                    response.data.cookies = await convertCookie(response.data.session_cookies)
                    response.data.session_cookies = response.data.session_cookies.map((e) => {
                        return {
                            key: e.name,
                            value: e.value,
                            domain: "facebook.com",
                            path: e.path,
                            hostOnly: e.hostOnly,
                creation: new Date().toISOString(),
                lastAccessed: new Date().toISOString()
                        }
                    })
                    return res.json({
                        status: true,
                        message: 'Lấy thông tin thành công!',
                        data: response.data
                    });
                }
                catch(e) {
                    return res.json({
                        status: false,
                        message: "Vui lòng bật xác thực 2FA rồi thử lại!"
                    });
                }
            }).catch((error) => {
                if(error.response.data.error.code == 401) {
                    return res.json({
                        status: false,
                        message: error.response.data.error.message
                    });
                }
                if(twofactor == '0' && (!_2fa || _2fa == "0")) {
                    return res.json({
                        status: false,
                        message: 'Vui lòng nhập mã xác thực 2 lớp!'
                    });
                }
                var data = error.response.data.error.error_data;
                try {
                    _2fa = (_2fa != "0") ? _2fa : totp(decodeURI(twofactor).replace(/\s+/g, '').toLowerCase())
                }
                
                catch (e) {
                    return res.json({
                        status: false,
                        message: 'Mã xác thực 2 lớp không hợp lệ!'
                    });
                }
                form.twofactor_code = _2fa,
                form.encrypted_msisdn = ""
                form.userid = data.uid
                form.machine_id = data.machine_id
                form.first_factor = data.login_first_factor
                form.credentials_type = "two_factor"
                form.sig = encodesig(sort(form))
                options.data = form
                axios.request(options).then(async(response) => {
                    response.data.access_token_eaad6v7 = await convertToken(response.data.access_token)
                    response.data.cookies = await convertCookie(response.data.session_cookies)
                    response.data.session_cookies = response.data.session_cookies.map((e) => {
                        return {
                            key: e.name,
                            value: e.value,
                            domain: "facebook.com",
                            path: e.path,
                            hostOnly: e.hostOnly,
                creation: new Date().toISOString(),
                lastAccessed: new Date().toISOString()
                        }
                    })
                    return res.json({
                        status: true,
                        message: 'Lấy thông tin thành công!',
                        data: response.data
                    });
                }).catch((error) => {
                    return res.json({
                        status: false,
                        message: error.response.data
                    });
                })
            })
        })
    } catch (e) {
        return res.json({
            status: false,
            message: 'Vui long kiem tra lại tai khoan, mat khau!'
        });
    }

}
async function convertCookie(seasion) {
    var cookie = "";
    for (var i = 0; i < seasion.length; i++) {
        cookie += seasion[i].name + "=" + seasion[i].value + "; ";
    }
    return cookie;
}
async function convertToken(token) {
    return new Promise((resolve) => {
        axios.get(`https://api.facebook.com/method/auth.getSessionforApp?format=json&access_token=${token}&new_app_id=275254692598279`).then((response) => {
            if (response.data.error) {
                resolve()
            } else {
                resolve(response.data.access_token)
            }
        })
    })
}
function randomString(length) {
    length = length || 10
    var char = 'abcdefghijklmnopqrstuvwxyz'
    char = char.charAt(
        Math.floor(Math.random() * char.length)
    )
    for (var i = 0; i < length - 1; i++) {
        char += 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(
            Math.floor(36 * Math.random())
        )
    }
    return char
}
function encodesig(string) {
    var data = ''
    Object.keys(string).forEach(function (info) {
        data += info + '=' + string[info]
    })
    data = md5(data + '62f8ce9f74b12f84c123cc23437a4a32')
    return data
}

function md5(string) {
    return require('crypto').createHash('md5').update(string).digest('hex')
}

function sort(string) {
    var sor = Object.keys(string).sort(),
        data = {},
        i
    for (i in sor)
        data[sor[i]] = string[sor[i]]
    return data
}