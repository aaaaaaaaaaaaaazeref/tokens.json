// check_token.js

const fetch = require('node-fetch');
const fs = require('fs');

async function checkToken(token) {
    const response = await fetch('https://raw.githubusercontent.com/aaaaaaaaaaaaaazeref/tokens.json/main/tokens.json');
    const data = await response.json();
    return data.tokens.includes(token);
}

// Pour une utilisation de la ligne de commande
if (require.main === module) {
    const token = process.argv[2];
    checkToken(token).then(exists => {
        console.log(exists ? 'Token exists' : 'Token does not exist');
        process.exit(exists ? 0 : 1);
    });
}
