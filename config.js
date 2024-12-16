const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=DEFAARBa#sP6eAubuCoquES3G0tohRGuRZuTJz3dDjlTKz1XGTEw',
GITHUB_AUTH_TOKEN: 'sm0KxVgf006JXaq63AzeC7V4N5B1dC1oZN2l', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'yffox',

};
