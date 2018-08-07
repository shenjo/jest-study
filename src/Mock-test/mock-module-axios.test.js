import FetchData from "./axios";
import axios from 'axios';


jest.mock('axios');

test('should fetch users', async () => {
  const mockResp = {data: {name: 'shenjo'}};
  axios.get.mockResolvedValue(mockResp);
  let result = await FetchData();
  expect(result).toEqual({name: 'shenjo'});
});
