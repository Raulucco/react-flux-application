import { connect } from 'http2';

const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');

const config = {
    baseUrl: 'http://localhost',
    port: 9005,
    paths: {
        html: './src/*.html',
        js: './src/*.js',
        styles: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './node_modules/toastr/build/toastr.min.css',
            './src/*.css'
        ],
        imgs: 'src/img/*',
        dist: './build'
    }
};

gulp.task('connect', function () {
    connect.server({
        root: ['build'],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('build/index.html')
        .pipe(open({url: config.baseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    browserify('./src/main.js')
        .transform(reactify)
        .bundle()
        .on('error', console.log.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('styles', function () {
    gulp.src(config.paths.styles)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
            .pipe(eslint({config: 'eslint.config.json'}))
            .pipe(esint.format());
});

gulp.task('imgs', function () {
    gulp.src(config.paths.imgs)
        .pipe(gulp.dest(config.paths.dist + '/imgs'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['lint', 'js']);
    gulp.watch(config.paths.styles, ['styles']);
    gulp.watch(config.paths.imgs, ['imgs']);
});

gulp.task('default', ['html', 'lint', 'js', 'styles', 'imgs', 'open', 'watch']);