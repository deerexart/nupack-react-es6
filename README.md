All you have to do:

Installation:

1. Clone project
2. run npm install

Serve:
1. run npm start

Test:
1. run npm test


That's it.  package.json has all dependencies needed so npm knows what is up when it runs


About project

This is my second reactJs attempt w/ Enzyme/Mocha/Chai
I converted the es5 exercise to es6
Some of the tests had to change a bit, I noticed es5 is a bit more picky about putting things in variables...
I like es6 more, if anyone was curious.

./src/
- component.jsx
-> contains react component

- index.jsx
-> contains reactDOM render
-> imports component from component.jsx

./test/
-> calculate-markup.spec.js
-> contains all unit tests in enzyme,chai, mocha
just run npm test in root folder

bundle.js
-> for compiled JS .. you can just ignore this file

index.html
has div with id for rendering component

package.json configured everything
webpack builds project (npm start in root folder)
