 var gulp  = require ('gulp'),
    $=require("gulp-load-plugins")(),
    open = require("gulp-open");


const address = require('address');
const localhost = address.ip() || 'localhost';


//开启服务器
gulp.task("webserver",function () {
  $.connect.server({
    port : "3333",
    livereload : true,
    root: "./",
    host:localhost
  })
});

gulp.task('open', function(){
  gulp.src('./')
  .pipe(open({
    uri:'http://'+localhost+':3333'
  }));
});



gulp.task("dev",["webserver","open"]);










