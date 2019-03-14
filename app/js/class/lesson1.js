/**
 * 用大括号括起来的作用域就是块作用域
 * for (let i = 1; i < 3; i++) {
    console.log(i);
  }   ====> 在这个块作用域中定义了i，i只在块作用域内有效
 * 
 * let变量不能重复定义
 */
function test() {
  for (let i = 1; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
  let a = 1;
  let a = 2;
}

/**
 * const 意为常量，不能修改，声明时必须赋值
 * k为指向对象的一个指针，k不能变，但是指针所指向的对象数据能变
 */
function last() {
  const PI = 3.1415926;
  const k = {
    a: 1
  }
  k.b = 3;
  console.log(PI, k);
}


// test();
last();