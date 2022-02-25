const fs = require('fs');
const path = require('path');

const dir = './assets';

function init() {
  const contents = fs
    .readdirSync(dir)
    .filter(name => path.extname(name) === '.json')
    .map(name => {
      const fileContent = require(dir + '/' + name);

      fileContent['id'] = Number(fileContent.name.replace(/\D/g, ''));

      return fileContent;
    });

  fs.writeFileSync('collectionItems.json', JSON.stringify(contents));
}

init();
