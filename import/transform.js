
const fs = require('fs');

let rawData = fs.readFileSync('./so-tags-src.json');

const data = JSON.parse(rawData);

const rows1 = data.resultSets[0].rows;
const rows2 = data.resultSets[1].rows;

const rows = rows1.concat(rows2);

let formattedArr = [];
for (let i = 0; i < rows.length; i++) {
  formattedArr.push({ soId: rows[i][1], name: rows[i][0] });
}

let exportData = JSON.stringify(formattedArr);
fs.writeFileSync('so-tags.json', exportData);
