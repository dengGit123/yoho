
var gulp = require("gulp");
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var connect = require("gulp-connect");
var watch = require('gulp-watch');
//将ES6代码编译成ES5

gulp.task("es5",function(){
	gulp.src(["app/static/js/login.js","app/static/js/register.js"])
.pipe(babel({
	presets:["es2015"]
}))
.pipe(gulp.dest("./dist"));
});
//开启服务器,自动刷新
var gulp = require('gulp');
var connect = require('gulp-connect');  //静态服务器

//使用connect启动一个web服务器
gulp.task('woyaofuwuqi', function () {  //任务名称不要有空格
	connect.server({
		liverload: true,
		port:9000  //端口号
	});
});

//默认任务
gulp.task('default', function() {
	// 测试一下
	console.log('this is a new test page.');
	gulp.start('woyaofuwuqi');  //启动一个web服务器
});
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
