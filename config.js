const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: '',
GITHUB_AUTH_TOKEN: '5hpvVCXwsX1filbJvOUVXuLcDGx3vh31dclt', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'DarksadasYT1',

};
