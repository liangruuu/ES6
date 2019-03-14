/**
 * app目录是前端资源的原始文件的目录
 * 但是server.js脚本文件处理的是server/public/下的文件
 * 所以还差一个环节：当app原始目录下的文件发生变化时自动将文件编译生成到public或者views目录下
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb) => {
  if (!args.watch) return cb();
  /**
   * 监听app原始目录下的JS文件发生变化时启动srcipts构建脚本
   * 同理...
   */
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/**/*.ejs', ['pages']);
  gulp.watch('app/**/*.css', ['css']);
});