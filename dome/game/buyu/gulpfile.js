//版权 北京智能社©, 保留所有权利

//1 加载模块
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

var arr = [
	"js/utils.js",
	"js/sprite.js",
	"js/Fish.js",
	"js/cannon.js",
	"js/bullet.js",
	"js/coin.js",
	"js/DieFish.js",
	"js/web.js",
	"js/index.js"
];


//2 配置任务
gulp.task("game",function(){
	//return gulp.src("js/*.js")
	return gulp.src(arr)
			   .pipe(concat("index.min.js"))
			   .pipe(uglify())
			   .pipe(gulp.dest("build"));
});


//3 注册任务
gulp.task("default",["game"]);



