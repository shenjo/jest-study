function beforAllTest() {
  console.log('测试需要的已准备好，可以开始测试了！')
}

function afterAllTest() {
  console.log('本轮测试结束，clean测试环境')
}

//当然也可以处理异步的
beforeAll(beforAllTest);

afterAll(afterAllTest);


test('1', () => {
  expect(1 + 1).toBe(2);
})

test('2', () => {
  expect(1 + 2 > 2).toBeTruthy()
})
