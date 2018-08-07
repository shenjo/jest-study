function beforEachTest() {
  console.log('测试需要的已准备好，可以开始测试了！')
}

function afterEachTest() {
  console.log('本次测试结束，clean测试环境')
}

//当然也可以处理异步的
beforeEach(beforEachTest);

afterEach(afterEachTest)


test('1', () => {
  expect(1 + 1).toBe(2);
})

test('2', () => {
  expect(1 + 2 > 2).toBeTruthy()
})
