const gulp = require('gulp');
const { series } = require('gulp');
const watch = require('gulp-watch');
const ts = require('gulp-typescript');

// Função para verificar alterações nos arquivos TS
checkTS = (cb) => {
    watch('src/**/*.ts', series(makeJS)); // Verifica alterações nos arquivos TS
    return cb();
};

// Função para criar o arquivo JS
makeJS = () => {
    return gulp
        .src('src/**/*.ts') // Local dos arquivos TS
        .pipe(ts())     // Compilação
        .pipe(gulp.dest('./build')) // Destino
        .on('end', () => console.log('Arquivo JS criado com sucesso!')) // Mensagem de sucesso
        .on('error', (err) => console.log(err)); // Mensagem de erro
};

module.exports.default = series(checkTS, makeJS); // Executa as funções em série
