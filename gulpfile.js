const gulp = require('gulp');
const { series } = require('gulp');
const watch = require('gulp-watch');
const ts = require('gulp-typescript');

checkTS = (cb) => {
    watch('src/**/*.ts', series(makeJS));
    return cb();
};

makeJS = () => {
    return gulp
        .src('src/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./build'))
        .on('end', () => console.log('Arquivo JS criado com sucesso!'))
        .on('error', (err) => console.log(err));
};

module.exports.default = series(checkTS, makeJS);
