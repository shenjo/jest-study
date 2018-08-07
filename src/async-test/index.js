export const callbackAsync = cb => {
  // 异步操作耗时100ms
  const data = 'callback';
  setTimeout(cb.bind(null, data), 100);
};

export const promiseAsync = () => {
  return new Promise(a => {
    const data = 'promise';
    setTimeout(a.bind(null, data), 100);
  })
};
