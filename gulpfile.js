var gulp = require("gulp")
var mincss=require("gulp-clean-css");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify")//压缩js

gulp.task("minAndcss",function(){
    gulp.src("./*.css")
        .pipe(mincss())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./mincss/"))
})
    gulp.task("default",["minAndcss"])


    
