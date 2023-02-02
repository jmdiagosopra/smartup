const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const options = {
  jpegRecompressOptions: {
    quality: 'high',
  },
};

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);
const getDirectoriesRecursive = (source) => [
  source,
  ...getDirectories(source)
    .map(getDirectoriesRecursive)
    .reduce((a, b) => a.concat(b), []),
];

const optimizeImgs = ({ input }) => new Promise(async (resolve, reject) => {
  try {
    let imageDirs = getDirectoriesRecursive(input);

    for (const dir of imageDirs) {
      await imagemin([`${dir}/*.{jpg,png,svg,gif}`], dir, {
        plugins: [
          imageminJpegRecompress(options['jpegRecompressOptions']),
          imageminOptipng(),
        ],
      });
    }

    resolve();
  } catch (error) {
    reject(error);
  }
});

module.exports = { optimizeImgs };
