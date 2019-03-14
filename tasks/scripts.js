/**
 * 构建脚本，对JS代码进行处理
 */

/**
 * gulp：基于gulp进行构建
 * gulp-if：gulp语句中进行if判断
 * gulp-concat：gulp中进行文件拼接
 * webpack：用webpack进行打包
 * webpack-stream：gulp处理的都是一些文件流，是基于stream的；用webpack处理需要结合webpackstream
 * vinyl-named：对文件做标记
 * gulp-livereload：文件修改以后，浏览器自动刷新(热更新)
 * gulp-plumber：处理文件信息流
 * gulp-rename：对文件重命名
 * gulp-uglify：处理对JS和CSS文件的压缩
 * gulp-util：在命令行工具中处理输出数据
 * args：对命令行参数进行解析
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {
	log,
	colors
} from 'gulp-util';
import args from './util/args';


/**
 * 1. gulp.task()：创建任务，名称为'scripts'
 * 2. gulp.src([...])：打开文件
 * 3. plumber({errorHandle: function () {}})：
 * 	处理常规的错误逻辑，按照gulp的规定的错误处理逻辑，需要在每次的pipe中
 * 	出现错误都要抛出异常，因为处理脚本是一个很长的流程，为了避免在某一个环节出错
 * 	抛出异常，需要集中处理错误，需要改变默认处理错误的机制
 * 4. named()：对文件重命名
 * 5. gulpWebpack()：使用webpack对JS进行编译
 * 6. gulp.dest()：编译后的文件存放地址
 */
gulp.task('scripts', () => {
	return gulp.src(['app/js/index.js'])
		.pipe(plumber({
			errorHandle: function () {}
		}))
		.pipe(named())
		.pipe(gulpWebpack({
			module: {
				loaders: [{
					test: /\.js$/,
					loader: 'babel'
				}]
			}
		}), null, (err, stats) => {
			log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
				chunks: false
			}))
		})
		.pipe(gulp.dest('server/public/js'))
		/**
		 * 下面的都是对重命名后的文件进行处理
		 * 1. rename():重命名
		 * 2. uglify():压缩
		 * 3. gulp.dest():另存为
		 */
		.pipe(rename({
			basename: 'cp',
			extname: '.min.js'
		}))
		.pipe(uglify({
			compress: {
				properties: false
			},
			output: {
				'quote_keys': true
			}
		}))
		.pipe(gulp.dest('server/public/js'))
		/**
		 * 判断文件是否变化并且热更新
		 */
		.pipe(gulpif(args.watch, livereload()))
})