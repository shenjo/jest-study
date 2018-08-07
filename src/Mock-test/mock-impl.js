const mockFn = jest.fn(cb => cb(null, true));


mockFn((err, val) => console.log(val));

mockFn((err, val) => console.log(val));


const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'
