/**
 * 编译完的文件需要有一个拷贝的过程，每次修改完需要用新的文件去覆盖旧的文件
 * 为了安全起见，需要把原文件清空
 */
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
