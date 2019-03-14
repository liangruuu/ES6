/**
 * 解构赋值
 *  * 解构：等号左边一个结构，等号右边一个结构，然后左右一一对应进行赋值
 *  * 数组解构赋值(常用) * 对象解构赋值(常用) * 字符串解构赋值 * 布尔值解构赋值 * 函数参数解构赋值 * 数值解构赋值
 * 
 */

/**
 * 数组解构赋值
 */
{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest);
}

/**
 * 对象解构赋值
 */
{
  let a, b;
  ({
    a,
    b
  } = {
    a: 1,
    b: 2
  })
  console.log(a, b);
}

{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c);
}

{
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b);
}

{
  function f() {
    return [1, 2]
  }
  let a, b;
  [a, b] = f();
  console.log(a, b);
}

{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, , , b] = f();
  console.log(a, b);
}

{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, , ...b] = f();
  console.log(a, b);
}

{
  let o = {
    p: 42,
    q: true
  };
  let {
    p,
    q
  } = o;
  console.log(p, q);
}

{
  let {
    a = 10, b = 5
  } = {
    a: 3
  };
  console.log(a, b);
}

/**
 * 对象解构赋值应用场景，JSON赋值模拟前后端通讯
 */
{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {
    title: esTitle,
    test: [{
      title: cnTitle
    }]
  } = metaData;
  console.log(esTitle, cnTitle);
}