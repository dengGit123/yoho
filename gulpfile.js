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
//开启服务器
gulp.task("connect",function(){
	connect.server({
		root:"dist",
		port:7777,
		livereload:true
	});
});
gulp.task("water",function(){
	
});
