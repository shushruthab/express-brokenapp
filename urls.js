const fs = require('fs');
const path = require('path');
const process = require('process');
const axios = require('axios');
const { URL } = require('url');


const filename = process.argv[2];

// Read the file containing the URLs
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  // Split the file contents into an array of URLs
  const urls = data.split('\n');
  
  for (const url of urls) {
    const { hostname } = new URL(url);

    axios.get(url)
      .then(html => {
        // Write the HTML to a file with the hostname as the filename
        fs.writeFile(
          path.join(__dirname, hostname + '.html'),
          html.data, 'utf8',
          err => {
            if (err) {
              console.error(err);
            }
          }
        );
      })
      .catch(err => {
        console.error(err);
      });
  }
});