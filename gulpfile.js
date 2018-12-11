var gulp = require('gulp'); //引入gulp
var uglify = require('gulp-uglify'); //压缩js
var babel = require('gulp-babel'); //es6转译
var connect = require('gulp-connect'); //服务器
var concat = require('gulp-concat'); //合并
var minicss = require('gulp-clean-css'); //引入css
var minihtml = require('gulp-html-minify'); //引入html
var del = require('del'); //删除整个文件
const rev = require('gulp-rev'); //添加版本号
var revCollector = require('gulp-rev-collector'); //修改路径版本号
var run = require('run-sequence'); //异步执行
var miniimg = require('gulp-imagemin'); //图片压缩
//sass转css
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var runSequence = require('run-sequence'); //解决异步问题
gulp.task("watch", function() {
    gulp.watch("app/**/*.html", ["minihtml"])
    gulp.watch("app/**/*.js", ["minijs"])
    gulp.watch("app/**/*.css", ["minicss"])
});
//压缩js
gulp.task('minijs', function() {
        gulp.src('app/static/js/*.js')
            .pipe(gulp.dest('dist/static/js'))
            .pipe(connect.reload())
        console.log("minijs执行了")
    })
    //压缩css
gulp.task('minicss', function() {
        gulp.src('app/static/css/*.css')
            .pipe(minicss())
            .pipe(gulp.dest('dist/static/css'))
            .pipe(connect.reload())
        console.log("minicss执行了")
    })
    //压缩HTML
gulp.task('minihtml', function() {
        gulp.src('app/*.html')
            .pipe(gulp.dest('dist'))
            .pipe(connect.reload()) //实时刷新
        console.log("minihtml执行了")
    })
    //图片压缩
gulp.task('miniimg', function() {
    gulp.src('app/static/images/*')
        .pipe(gulp.dest('dist/static/images'))
        .pipe(connect.reload())
})


//监听实时更新
// gulp.task('watch', function() {
//     gulp.watch('app/static/js/*.js', ['minijs'])
//     gulp.watch('app/static/css/*.css', ['minicss'])
//     gulp.watch('app/static/images/bg71.png', ['miniimg'])
//     gulp.watch('app/index.html', ['minihtml'])
// })

//打开服务器
gulp.task('server', function() {
    connect.server({
        root: 'dist', //服务器默认文件夹
        port: '7777', //端口号
        livereload: true
    })
})
gulp.task("all", function() {
        gulp.src("app/**/*.*")
            .pipe(gulp.dest("dist"))
            .pipe(connect.reload())
    })
    //将ES6代码编译成ES5
gulp.task("es5", function() {
        gulp.src(["app/static/js/login.js", "app/static/js/register.js"])
            .pipe(babel({
                presets: ["es2015"]
            }))
            .pipe(gulp.dest("./dist"));
    })
    //删除文件
gulp.task('clean', function() {
    del(['dist'])
})
gulp.task("default", function() {
    runSequence(["clean"], ["all"], ["watch", "server"])
});
//将saaa变成css
gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/**/css'));
<<<<<<< HEAD

=======
>>>>>>> 484001fbc2adb701a0d919e4187657f8cba851aa
});

