import axios from "axios";

export default function () {
  return axios.get('/user.json').then(resp => resp.data);
}
