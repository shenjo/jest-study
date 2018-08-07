import ForEach from './index'

test('mock', () => {
  const mockCallback = jest.fn();
  mockCallback.mockReturnValueOnce(42)
  const arr = [10, 20];
  ForEach(arr,mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(arr[0])
  expect(mockCallback.mock.calls[1][0]).toBe(arr[1])
  expect(mockCallback.mock.results[0].value).toBe(42);
})

