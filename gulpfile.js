var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
    sourceDir: './source'
};

gulp.task('css', function() {
    return gulp.src(config.sourceDir + '/sass/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/assets/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('vendor.js', function () {
    var allBowerFiles = mainBowerFiles();
    var jsBowerFiles = allBowerFiles.filter(function (file) {
        return -1 !== file.indexOf('.js');
    });

    return (gulp.src(jsBowerFiles)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.publicDir + '/assets')));
});

gulp.task('default', ['css', 'fonts', 'vendor.js']);

//Watch task
gulp.task('watch', function() {
    gulp.start('default');
    gulp.watch(config.sourceDir + '/sass/**/*.scss',['css']);
});