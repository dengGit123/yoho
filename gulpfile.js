<<<<<<< HEAD
var gulp = require('gulp');
gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    console.log('shabi');
  });
gulp.task('first',function(){
  console.log('first');
});
gulp.task('second', function(){
  console.log('second');
});
gulp.task('third',function(){
  console.log('thired');
})
=======
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
>>>>>>> 545df455732661dc9536d3c4dfca93daef7a9888
