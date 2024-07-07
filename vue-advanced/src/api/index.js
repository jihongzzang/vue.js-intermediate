import { handleException } from '@/utils/handler';
import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  lastPrefix: '/1.json',
};

async function fetchList(pageName) {
  const { baseUrl, lastPrefix } = config;

  try {
    const response = axios.get(`${baseUrl}${pageName}${lastPrefix}`);

    return response;
  } catch (error) {
    handleException(error);
  }
}

async function fetchUserInfo(username) {
  const { baseUrl } = config;

  try {
    const response = axios.get(`${baseUrl}user/${username}.json`);

    return response;
  } catch (error) {
    handleException(error);
  }
}

async function fetchCommentItem(id) {
  const { baseUrl } = config;

  try {
    const response = axios.get(`${baseUrl}item/${id}.json`);

    return response;
  } catch (error) {
    handleException(error);
  }
}

export { fetchList, fetchUserInfo, fetchCommentItem };
