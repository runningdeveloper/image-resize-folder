# Resize images in a folder
## Super basic thing for #100DaysOfCode

# Install
```
$ git clone ...
$ cd ..
$ npm i
```

# Usage
Change these variables in the index.js file
```
const inputDir = '/Users/geoffreyhunt/Desktop/image-test/in'
const outputDir = '/Users/geoffreyhunt/Desktop/image-test/out'
const size = {width: 1600, height: 1200, type: 'cover', quality: 80} // type: https://sharp.pixelplumbing.com/en/stable/api-resize/
```
Then you can run it with
```
$ node .
```
