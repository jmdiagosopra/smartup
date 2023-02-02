const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const directories = {
  images: {
    input: './images/**/*.*',
    output_es5: './docs/es5-bundled/images',
    output_es6: './docs/es6-bundled/images',
    output_esm: './docs/esm-bundled/images',
  },
};

gulp.task('images', () => {
  return gulp
    .src(directories.images.input)
    .pipe(imageMin([
      imageMin.jpegtran({
        progressive: true,
      }),
      pngquant({
        quality: [0.6, 0.8],
      }),
    ], {
      progressive: true,
      verbose: true,
    }))
    .pipe(gulp.dest(directories.images.output_es5))
    .pipe(gulp.dest(directories.images.output_es6))
    .pipe(gulp.dest(directories.images.output_esm));
});

gulp.task('default', gulp.parallel('images'));
