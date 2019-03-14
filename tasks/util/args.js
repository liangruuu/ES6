/**
 * 处理命令行参数的脚本文件
 */
import yargs from 'yargs';

const args = yargs

  /**
   * option表示命令行中的选项部分, eg: gulp -production中的'-production'就是选项部分
   * 区分开发环境和线上环境
   */
  .option('production', {
    /**
     * production数据类型为bool
     * 默认值为false, 为开发环境
     */
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })

  /**
   * 是否监听开发环境中的修改的文件，比如改了JS或者CSS需不需要自动编译
   */
  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

  /**
   * 是否详细输出命令行的日志
   */
  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })

  /**
   * 结合并压缩你的JavaScript和CSS文件能够让你的网站更加优秀。
   * 但是，当你需要调试这些压缩文件中的代码就会变成一个噩梦,但是可以通过Source Maps解决这个问题。
   * Source Maps能够提供将压缩文件恢复到源文件原始位置的映射代码的方式。
   * 这意味着你可以在优化压缩代码后轻松的进行调试。
   */
  .option('sourcemaps', {
    describe: 'force the creation of sroucemaps'
  })

  /**
   * 设置服务器启动端口号
   */
  .option('port', {
    string: true,
    default: 8080,
    describe: 'server port'
  })

  .argv

export default args;