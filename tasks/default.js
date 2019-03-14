/**
 * gulp默认执行的脚本文件
 * 在命令行中如果输入$> gulp  则默认执行 $> gulp default
 * 一定要有default任务
 */
import gulp from 'gulp';

gulp.task('default',['build']);
