## Express Broken App


## Project Details

This project was done as a part of a three part assessment. The first part included answering conceptual questions in the [./conceptual.md] file. The second part was to fix bugs in the broken app which is documented in [./broken-app/issues.md]. The third part included async scripting with the following requirement:

1. Write a script, urls.js, that does the following:

    a. It is called on the command line like node urls.js FILENAME, and it reads the contents of FILENAME (each line of that file will be a URL).

    b. For each URL, it will get that page (a GET request to the URL) and save the HTML in a new file.
    
    c. For each URL, the output filename should be the hostname of the URL. For example, for the input URL http://yahoo.com/blah/blah, your script should write the contents to a plain text file called yahoo.com

2. Handle Errors
a. If you cannot read the original file (FILENAME), immediately end your script with an error printed to the console.
b. If you cannot download a particular URL or cannot write to a particular output file, print an error to the console saying so, but continue on with the rest of the script.

## Quick Start
```javascript
// Install dependencies
npm install

// Run server
cd broken-app
nodemon server.js

```
