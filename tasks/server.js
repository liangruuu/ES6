/**
 * 服务器的脚本
 * gulp-live-server：启动服务器
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
  /**
   * 判定不是出于监听状态，返回回调函数，否则创建服务器
   */
  if (!args.watch) return cb();

  var server = liveserver.new(['--harmony', 'server/bin/www']);
  server.start();

  /**
   * 监听server下的JS和EJS文件改变时，浏览器自动刷新
   */
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'],
    function (file) {
      server.notify.apply(server, [file]);
    })

  /**
   * 路由接口改变时，这时不是单单刷新浏览器就能解决的，需要server重启才能生效
   * 监听需要重启服务的文件
   */
  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
    server.start.bind(server)()
  });
})