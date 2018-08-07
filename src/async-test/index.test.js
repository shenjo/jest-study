import {callbackAsync, promiseAsync} from './index'

// 测试cb型的 加上done回调
test('call back async function test', done => {
  callbackAsync(data => {
    // do your assert
    expect(data).toBe('callback');
    done(); // 如果done没有被调用，测试会失败
  })
});

//测试promise 写法1
test('promise async function test1 ', () => {
  //return 不能少
  return promiseAsync().then(data => {
    expect(data).toBe('promise');
  });
});


//测试promise 写法2
test('promise async function test2', async () => {
  let data = await promiseAsync();
  expect(data).toBe('promise');
});

//测试promise写法3
test('promise async function test3', () => {
  return expect(promiseAsync()).resolves.toBe('promise');
});

