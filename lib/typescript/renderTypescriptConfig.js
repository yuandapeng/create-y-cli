const fs = require('fs');
const path = process.cwd();


function renderTypescriptConfig() {
    const tsconfig = fs.readFileSync(__dirname + '/tsconfig.json');
    fs.writeFileSync(process.cwd() + '/tsconfig.json', tsconfig)
}

module.exports = renderTypescriptConfig;