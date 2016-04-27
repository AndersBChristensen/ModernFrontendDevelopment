var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
};

gulp.task('css', function() {
    return gulp.src(config.bootstrapDir + '/sass/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/assets/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', ['css', 'fonts']);


//Watch task
gulp.task('default',function() {
    gulp.watch(config.bootstrapDir + '/sass/**/*.scss',['css']);
});