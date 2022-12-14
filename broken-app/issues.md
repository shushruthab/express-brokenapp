# Broken App Issues

1. The app is missing a body parser to parse json object in req.body. To fix this added ```express.json()``` middleware. This is line 7 of app.js

2. The initial response variable returned promises and not the resolved promises. The issue was fixed by using the ```Promises.all``` in the helper function. 

3. Code has been refactored to move business logic to helper function. Adding proper error boundaries with expressError and serving on server.js. 