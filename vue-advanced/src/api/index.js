import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  lastPrefix: '/1.json',
};

function fetchList(sth) {
  const { baseUrl, lastPrefix } = config;

  return axios.get(`${baseUrl}${sth}${lastPrefix}`);
}

export { fetchList };
