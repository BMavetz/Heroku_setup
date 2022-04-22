const fs = require('fs');
const util = require('util');


const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const removeNote = (note, notesArray) => {
    // removes specific note from notes array
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);
    console.log(`${notesArray}`);
    // rewrites db.json with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/note.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

module.exports = { readFromFile, writeToFile, readAndAppend, removeNote };