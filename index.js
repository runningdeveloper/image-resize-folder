const sharp = require('sharp');
const dir = require('node-dir');
const path = require('path');

const inputDir = '/Users/geoffreyhunt/Desktop/image-test/in' // NB this will look in sub directory for folder too
const outputDir = '/Users/geoffreyhunt/Desktop/image-test/out'
const size = {width: 1600, height: 1200, type: 'cover', quality: 80} // type: https://sharp.pixelplumbing.com/en/stable/api-resize/

const convertImage = async (image) => {
  const name = path.basename(image);
  try {
    const result = await sharp(image)
    .resize(size.width, size.height, {
      fit: sharp.fit[size.type],
      withoutEnlargement: true
    })
    .toFormat('jpeg')
    .jpeg({
      quality: size.quality,
    })
    .toFile(`${outputDir}/${name}`)
    return { image, error: false, ...result};
    
  } catch (error) {
    return { image, error: true, ...error}
  }
  

  }

const files = dir.files(inputDir, {sync:true});
files.forEach((element) => {
  if (element.split('.').pop() === ('jpg'||'png'||'jpeg')) {
    convertImage(element).then(result => {
      console.log(result)
    });
  }
});