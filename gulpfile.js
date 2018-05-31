/* gulp配置文件 */
var gulp = require('gulp');  //在本地引入gulp

//引入组件
const del           = require('del');                        // 删除目录
const zip           = require('gulp-zip');                   // 压缩zip包
const runSequence   = require('run-sequence');               // 顺序执行或者并行执行


// build之后输出的根目录
const BUILD_ASSET     = './dist/**/*.*';

const SETTING_FILE_ASSET   = './main.xml';

const ZIP_ASSET = './zip/**/*.*';

// build之后输出的代码目录
const ZIP_PATH = './zip';

//
const ZIP_SRC_PATCH = ZIP_PATH+'/src';

//build之后zip包的名称
const ZIP_NAME = 'dist.zip';

//轻应用容器的配置文件
const SETTING_FILE   = './main.xml';

/**
 * 执行任务
 */
gulp.task('default',function () {
  return runSequence(
    ['copy','setting'],
    'zip',
    'clean'
  );
})
gulp.task('copy',function () {
  return gulp.src([BUILD_ASSET])
    .pipe(gulp.dest(ZIP_SRC_PATCH))
})
gulp.task('setting',function () {
  return gulp.src(SETTING_FILE_ASSET)
    .pipe(gulp.dest(ZIP_PATH))
})
gulp.task('zip',function () {
  return gulp.src(ZIP_ASSET)
    .pipe(zip(ZIP_NAME))
    .pipe(gulp.dest('./'))
})
gulp.task('clean',function (cb) {
  return del(ZIP_PATH,cb);
})
