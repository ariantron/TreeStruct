const fs = require('fs');

const args = process.argv.slice(2);
const keyValuePairs = {};
for (const arg of args) {
    const [key, value] = arg.split('=');
    if (key && value) {
        keyValuePairs[key.replace('--', '')] = value;
    }
}

const str = JSON.parse(fs.readFileSync(keyValuePairs['path'], 'utf8'));

function generateTreeStructure(root, depth = 0) {
    if (root === null || typeof root !== 'object') {
        return '';
    }

    const indent = '    '.repeat(depth);
    const items = Object.keys(root);
    let treeString = '';

    items.forEach((item, index) => {
        const isLast = index === items.length - 1;
        const prefix = isLast ? '└── ' : '├── ';

        treeString += indent + prefix + item + '\n';

        const subtree = generateTreeStructure(root[item], depth + 1);
        if (subtree) {
            treeString += subtree;
        }
    });

    return treeString;
}

fs.writeFile('tree.txt', generateTreeStructure(str), (err) => {
    if (err) {
        console.error(err);
    }
});