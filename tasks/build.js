/**
 * 把所有任务串联在一起，分清任务的前后和依赖关系
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
/**
 * 1. 第一步清空文件
 * 2. 第二步编译模板或者拷贝css
 * 3. 第四步执行脚本
 * 4. 数组中的browser任务在serve任务之前执行
 * * serve任务必须在最后执行，因为只有当所有文件都处理完成之后才能放到服务器里去运行
 */
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));