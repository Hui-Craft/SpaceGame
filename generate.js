var fs = require('fs');
var pages = require('./files');

var content;
content = '';

for(let i=0; i<pages.length; i++) {
    var fc = fs.readFileSync('./files/' + pages[i] + '.md').toString();

    content += fc + '\n';
}

content += '\n';
content += '\tDo not edit this file!\n';
content += '\tGenerated at ' + new Date().toLocaleString("en-US");
content += '\n\t© HuiCraft ' + new Date().getFullYear();

fs.writeFileSync('./README.MD', content);